# Аналитическая No-Code Платформа для Blockchain Data
## Обзор продукта

Платформа предназначена для создания, управления и выполнения аналитических пайплайнов с фокусом на данные блокчейна. Позволяет пользователям создавать сложные аналитические процессы без написания кода, используя визуальный редактор.

## Ключевые сущности
### Project (Проект)

- Основной контейнер для организации работы
- Содержит коллекцию пайплайнов
- Включает настройки дашбордов
- Имеет свои права доступа и настройки

### Pipeline (Пайплайн)
- Исполняемая единица анализа данных
- Работает на основе шаблона (Template)
- Имеет режимы работы:
  - Last Value: хранит только последний результат
  - Accumulator: накапливает все результаты выполнения
  - Procedure: не сохраняет результаты
- Может быть активирован различными триггерами

### Template (Шаблон)
- Визуальное определение логики обработки данных, состоящее из:
1. Source: источники данных
  - Blockchain (ETH)
  - HTTP requests
  - Databases
2. Entity: методы работы с источником
  - Blockchain методы (getBalance, getTransactions)
  - HTTP методы
  - Database queries
3. Field: селекторы полей данных
4. Transform: преобразования данных
5. Filter: фильтрация данных
6. Sort: сортировка
7. Input: входные параметры
8. Return: определение выходных данных


### Trigger (Триггер)

Механизмы запуска пайплайнов:
- Manual: ручной запуск
- Cron: по расписанию
- Webhook: через HTTP вебхуки
- Blockchain Event: события блокчейна
  - Новые блоки
  - События контрактов
  - Транзакции

### Dashboard (Дашборд)

Визуализация результатов:
  - Text: текстовые значения
  - Table: табличное представление
  - Chart: графики
  - Line (линейный)
  - Bar (столбчатый)
  - Pie Chart: круговые диаграммы

## Процессы работы
### Создание пайплайна
1. Создание/выбор проекта
2. Создание нового пайплайна
3. Выбор или создание шаблона
4. Настройка входных параметров
5. Определение режима работы
6. Настройка триггеров
8. Активация пайплайна

### Работа с шаблоном
1. Открытие редактора шаблонов
2. Добавление компонентов из панели инструментов
3. Настройка компонентов
4. Создание связей между компонентами
5. Валидация шаблона
6. Сохранение

### Выполнение пайплайна
1. Активация триггером
2. Проверка входных данных
3. Асинхронное выполнение компонентов
4. Сбор и обработка результатов
4. Сохранение согласно режиму работы

### Визуализация
1. Создание дашборда
2. Добавление виджетов
3. Привязка к результатам пайплайнов
4. Настройка обновления данных
5. Настройка внешнего вида


## Технические особенности
### Типизация данных
- Строгая типизация между компонентами
- Валидация на этапе создания связей
- Поддержка сложных типов данных

### Асинхронная обработка
- Параллельное выполнение независимых компонентов
- Ожидание всех входных данных
- Таймауты и обработка ошибок

### Масштабируемость
- Независимое масштабирование компонентов
- Очереди для обработки триггеров
- Распределенное хранение результатов

## Мониторинг и аналитика
- Статистика выполнения пайплайнов
- Мониторинг триггеров
- Использование ресурсов
- История изменений
- Логирование ошибок

## Безопасность
- Аутентификация пользователей
- Разграничение доступа к проектам
- Защита API endpoints
- Валидация входных данных
- Аудит действий
## Ограничения системы
- Максимальное время выполнения пайплайна: 1 минута
- Лимиты на количество компонентов в шаблоне
- Ограничения на хранение данных
- Квоты на выполнение пайплайнов
## Монетизация
- Учет успешных выполнений пайплайнов
- Тарификация по количеству выполнений
- Ограничения в зависимости от тарифного плана

## Техническая реализация и архитекура
### Часть 1/4 - Основные сущности и структура:
```json
{
  "version": "1.0.0",
  "system": {
    "name": "Blockchain Analytics Platform",
    "description": "No-code analytics platform for blockchain data",

    "entities": {
      "project": {
        "type": "root",
        "fields": {
          "id": { "type": "uuid", "generated": true },
          "name": { "type": "string", "required": true },
          "description": { "type": "string" },
          "owner": { "type": "reference", "entity": "user" },
          "created": { "type": "timestamp" },
          "updated": { "type": "timestamp" },
          "settings": {
            "type": "object",
            "properties": {
              "visibility": {
                "type": "enum",
                "values": ["private", "team", "public"]
              },
              "tags": { "type": "array", "items": "string" }
            }
          }
        },
        "relations": {
          "pipelines": {
            "type": "hasMany",
            "entity": "pipeline"
          },
          "dashboards": {
            "type": "hasMany",
            "entity": "dashboard"
          },
          "team": {
            "type": "hasMany",
            "entity": "user",
            "through": "projectAccess"
          }
        }
      },

      "pipeline": {
        "type": "entity",
        "fields": {
          "id": { "type": "uuid", "generated": true },
          "name": { "type": "string", "required": true },
          "description": { "type": "string" },
          "template": { "type": "reference", "entity": "template" },
          "mode": {
            "type": "enum",
            "values": ["lastValue", "accumulator", "procedure"],
            "required": true
          },
          "status": {
            "type": "enum",
            "values": ["active", "inactive", "error"],
            "default": "inactive"
          },
          "created": { "type": "timestamp" },
          "updated": { "type": "timestamp" },
          "lastRun": { "type": "timestamp" },
          "settings": {
            "type": "object",
            "properties": {
              "timeout": {
                "type": "number",
                "default": 60,
                "description": "Maximum execution time in seconds"
              },
              "retryPolicy": {
                "attempts": { "type": "number", "default": 3 },
                "delay": { "type": "number", "default": 5 }
              }
            }
          }
        },
        "relations": {
          "project": {
            "type": "belongsTo",
            "entity": "project",
            "required": true
          },
          "executions": {
            "type": "hasMany",
            "entity": "pipelineExecution"
          },
          "triggers": {
            "type": "hasMany",
            "entity": "trigger"
          }
        }
      },

      "template": {
        "type": "entity",
        "fields": {
          "id": { "type": "uuid", "generated": true },
          "name": { "type": "string", "required": true },
          "description": { "type": "string" },
          "version": { "type": "string", "required": true },
          "nodes": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "id": { "type": "string" },
                "type": {
                  "type": "enum",
                  "values": [
                    "source",
                    "entity",
                    "field",
                    "transform",
                    "filter",
                    "sort",
                    "input",
                    "return"
                  ]
                },
                "config": { "type": "object" },
                "position": {
                  "x": { "type": "number" },
                  "y": { "type": "number" }
                }
              }
            }
          },
          "connections": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "id": { "type": "string" },
                "sourceNode": { "type": "string" },
                "targetNode": { "type": "string" },
                "sourcePort": { "type": "string" },
                "targetPort": { "type": "string" }
              }
            }
          },
          "validation": {
            "type": "object",
            "properties": {
              "isValid": { "type": "boolean" },
              "errors": { "type": "array", "items": "string" }
            }
          }
        }
      }
    }
  }
}
```


### Часть 2/4 - Компоненты шаблонов и система исполнения:
```json
{
  "templateComponents": {
    "source": {
      "types": {
        "blockchain": {
          "providers": {
            "eth": {
              "type": "source",
              "config": {
                "network": {
                  "type": "enum",
                  "values": ["mainnet", "testnet"],
                  "required": true
                },
                "provider": {
                  "type": "enum",
                  "values": ["quicknode"],
                  "required": true
                }
              },
              "methods": {
                "getBalance": {
                  "inputs": {
                    "address": {
                      "type": "string",
                      "validation": "^0x[a-fA-F0-9]{40}$"
                    }
                  },
                  "output": {
                    "type": "bigint",
                    "description": "Balance in wei"
                  }
                },
                "getTransaction": {
                  "inputs": {
                    "hash": {
                      "type": "string",
                      "validation": "^0x[a-fA-F0-9]{64}$"
                    }
                  },
                  "output": {
                    "type": "object",
                    "properties": {
                      "hash": "string",
                      "from": "string",
                      "to": "string",
                      "value": "bigint",
                      "gasUsed": "number",
                      "blockNumber": "number"
                    }
                  }
                },
                "getBlock": {
                  "inputs": {
                    "number": { "type": "number" }
                  },
                  "output": {
                    "type": "object",
                    "properties": {
                      "number": "number",
                      "hash": "string",
                      "timestamp": "number",
                      "transactions": "array<string>"
                    }
                  }
                }
              }
            }
          }
        },
        "http": {
          "type": "source",
          "config": {
            "method": {
              "type": "enum",
              "values": ["GET", "POST", "PUT", "DELETE"]
            },
            "url": { "type": "string" },
            "headers": { "type": "object" },
            "body": { "type": "object" }
          }
        },
        "database": {
          "type": "source",
          "config": {
            "type": {
              "type": "enum",
              "values": ["postgres", "mysql", "mongodb"]
            },
            "connection": {
              "host": "string",
              "port": "number",
              "database": "string",
              "credentials": {
                "username": "string",
                "password": "string"
              }
            }
          }
        }
      }
    },

    "entity": {
      "type": "component",
      "config": {
        "source": {
          "type": "reference",
          "target": "source",
          "required": true
        },
        "method": {
          "type": "dynamic",
          "dependsOn": "source.type"
        },
        "arguments": {
          "type": "array",
          "items": {
            "name": "string",
            "value": "any",
            "type": "string"
          }
        }
      }
    },

    "field": {
      "type": "component",
      "config": {
        "source": {
          "type": "reference",
          "target": ["entity", "transform"],
          "required": true
        },
        "path": {
          "type": "string",
          "description": "Dot notation path to field"
        },
        "alias": {
          "type": "string",
          "description": "Output field name"
        }
      }
    },

    "transform": {
      "type": "component",
      "operations": {
        "math": {
          "add": {
            "inputs": [
              { "type": "number" },
              { "type": "number" }
            ],
            "output": { "type": "number" }
          },
          "subtract": {
            "inputs": [
              { "type": "number" },
              { "type": "number" }
            ],
            "output": { "type": "number" }
          },
          "multiply": {
            "inputs": [
              { "type": "number" },
              { "type": "number" }
            ],
            "output": { "type": "number" }
          },
          "divide": {
            "inputs": [
              { "type": "number" },
              { "type": "number" }
            ],
            "output": { "type": "number" }
          }
        },
        "string": {
          "concat": {
            "inputs": [
              { "type": "string" },
              { "type": "string" }
            ],
            "output": { "type": "string" }
          },
          "substring": {
            "inputs": [
              { "type": "string" },
              { "type": "number" },
              { "type": "number" }
            ],
            "output": { "type": "string" }
          }
        },
        "array": {
          "map": {
            "input": { "type": "array" },
            "transform": { "type": "function" },
            "output": { "type": "array" }
          },
          "filter": {
            "input": { "type": "array" },
            "condition": { "type": "function" },
            "output": { "type": "array" }
          },
          "reduce": {
            "input": { "type": "array" },
            "reducer": { "type": "function" },
            "initialValue": { "type": "any" },
            "output": { "type": "any" }
          }
        }
      }
    }
  }
}
```

### Часть 3/4 - Триггеры, система исполнения и хранение результатов:
```json
{
  "executionSystem": {
    "triggers": {
      "types": {
        "manual": {
          "type": "trigger",
          "config": {
            "inputValidation": { "type": "boolean", "default": true },
            "confirmationRequired": { "type": "boolean", "default": false }
          }
        },
        "schedule": {
          "type": "trigger",
          "config": {
            "cron": {
              "expression": { "type": "string", "required": true },
              "timezone": { "type": "string", "default": "UTC" }
            },
            "retry": {
              "attempts": { "type": "number", "default": 3 },
              "delay": { "type": "number", "default": 60 }
            }
          }
        },
        "webhook": {
          "type": "trigger",
          "config": {
            "endpoint": {
              "method": {
                "type": "enum",
                "values": ["GET", "POST"],
                "default": "POST"
              },
              "path": { "type": "string", "generated": true },
              "auth": {
                "type": "enum",
                "values": ["none", "apiKey"],
                "default": "apiKey"
              }
            },
            "inputMapping": {
              "type": "object",
              "description": "Maps webhook payload to pipeline inputs"
            }
          }
        },
        "blockchainEvent": {
          "type": "trigger",
          "variants": {
            "newBlock": {
              "config": {
                "network": {
                  "type": "enum",
                  "values": ["eth-mainnet", "eth-testnet"]
                },
                "confirmations": {
                  "type": "number",
                  "default": 1,
                  "min": 1
                }
              }
            },
            "contractEvent": {
              "config": {
                "network": {
                  "type": "enum",
                  "values": ["eth-mainnet", "eth-testnet"]
                },
                "address": {
                  "type": "string",
                  "validation": "^0x[a-fA-F0-9]{40}$"
                },
                "eventSignature": { "type": "string" },
                "filters": { "type": "object" }
              }
            }
          }
        }
      },

      "binding": {
        "type": "object",
        "properties": {
          "triggerId": { "type": "string" },
          "pipelineId": { "type": "string" },
          "inputMapping": {
            "type": "object",
            "description": "Maps trigger output to pipeline inputs"
          },
          "enabled": { "type": "boolean", "default": true }
        }
      }
    },

    "execution": {
      "pipeline": {
        "states": {
          "pending": {
            "description": "Waiting for execution",
            "next": ["running", "failed"]
          },
          "running": {
            "description": "Currently executing",
            "next": ["completed", "failed"]
          },
          "completed": {
            "description": "Successfully completed",
            "final": true
          },
          "failed": {
            "description": "Execution failed",
            "final": true
          }
        },
        "timeout": {
          "default": 60,
          "unit": "seconds"
        }
      },

      "node": {
        "states": {
          "waiting": {
            "description": "Waiting for inputs"
          },
          "ready": {
            "description": "All inputs received"
          },
          "processing": {
            "description": "Processing data"
          },
          "completed": {
            "description": "Node execution completed"
          },
          "error": {
            "description": "Node execution failed"
          }
        }
      }
    },

    "storage": {
      "modes": {
        "lastValue": {
          "type": "storage",
          "implementation": {
            "type": "document",
            "structure": {
              "pipelineId": "string",
              "lastUpdated": "timestamp",
              "value": "any",
              "metadata": {
                "executionId": "string",
                "duration": "number",
                "trigger": "object"
              }
            }
          }
        },
        "accumulator": {
          "type": "storage",
          "implementation": {
            "type": "collection",
            "structure": {
              "pipelineId": "string",
              "executionId": "string",
              "timestamp": "timestamp",
              "value": "any",
              "metadata": {
                "duration": "number",
                "trigger": "object",
                "inputs": "object"
              }
            },
            "indexes": [
              { "fields": ["pipelineId", "timestamp"] },
              { "fields": ["executionId"] }
            ]
          }
        },
        "procedure": {
          "type": "storage",
          "implementation": {
            "type": "none",
            "logging": {
              "execution": true,
              "errors": true
            }
          }
        }
      },

      "retention": {
        "lastValue": {
          "type": "single",
          "keepVersions": 1
        },
        "accumulator": {
          "type": "policy",
          "options": {
            "timeBasedRetention": {
              "duration": "30d",
              "granularity": "1h"
            },
            "countBasedRetention": {
              "maxRecords": 10000
            }
          }
        }
      }
    }
  }
}
```


### Часть 4/4 - Дашборды, мониторинг, безопасность и ограничения:
```json
{
  "visualization": {
    "dashboard": {
      "type": "entity",
      "fields": {
        "id": { "type": "uuid" },
        "name": { "type": "string" },
        "description": { "type": "string" },
        "layout": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "i": "string",
              "x": "number",
              "y": "number",
              "w": "number",
              "h": "number"
            }
          }
        }
      },
      "widgets": {
        "types": {
          "text": {
            "type": "widget",
            "config": {
              "format": { "type": "string" },
              "style": {
                "size": {
                  "type": "enum",
                  "values": ["small", "medium", "large"]
                },
                "color": { "type": "string" },
                "align": {
                  "type": "enum",
                  "values": ["left", "center", "right"]
                }
              }
            },
            "data": {
              "type": "single",
              "allowedTypes": ["string", "number", "boolean"]
            }
          },
          "table": {
            "type": "widget",
            "config": {
              "columns": {
                "type": "array",
                "items": {
                  "name": "string",
                  "field": "string",
                  "type": "string",
                  "format": "string"
                }
              },
              "pagination": {
                "enabled": "boolean",
                "pageSize": "number"
              },
              "sorting": {
                "enabled": "boolean",
                "defaultField": "string",
                "direction": "string"
              }
            },
            "data": {
              "type": "array",
              "allowedTypes": ["array<object>"]
            }
          },
          "chart": {
            "type": "widget",
            "variants": {
              "line": {
                "config": {
                  "xAxis": {
                    "field": "string",
                    "type": "string",
                    "label": "string"
                  },
                  "yAxis": {
                    "field": "string",
                    "type": "string",
                    "label": "string"
                  },
                  "series": {
                    "type": "array",
                    "items": {
                      "name": "string",
                      "field": "string",
                      "color": "string"
                    }
                  }
                }
              },
              "bar": {
                "config": {
                  "orientation": {
                    "type": "enum",
                    "values": ["vertical", "horizontal"]
                  },
                  "stacked": "boolean",
                  "series": {
                    "type": "array",
                    "items": {
                      "name": "string",
                      "field": "string",
                      "color": "string"
                    }
                  }
                }
              }
            },
            "data": {
              "type": "array",
              "allowedTypes": ["array<object>"]
            }
          },
          "pieChart": {
            "type": "widget",
            "config": {
              "valueField": "string",
              "labelField": "string",
              "colors": "array<string>",
              "donut": "boolean"
            },
            "data": {
              "type": "array",
              "allowedTypes": ["array<object>"]
            }
          }
        }
      }
    }
  },

  "monitoring": {
    "metrics": {
      "system": {
        "pipelines": {
          "total": { "type": "counter" },
          "active": { "type": "gauge" },
          "executions": {
            "total": { "type": "counter" },
            "success": { "type": "counter" },
            "failed": { "type": "counter" },
            "duration": { "type": "histogram" }
          }
        },
        "triggers": {
          "invocations": { "type": "counter" },
          "failures": { "type": "counter" }
        },
        "storage": {
          "size": { "type": "gauge" },
          "operations": { "type": "counter" }
        }
      },
      "user": {
        "executionQuota": {
          "used": { "type": "counter" },
          "limit": { "type": "gauge" }
        },
        "storageQuota": {
          "used": { "type": "gauge" },
          "limit": { "type": "gauge" }
        }
      }
    },
    "alerts": {
      "rules": {
        "highFailureRate": {
          "condition": "failure_rate > 0.1",
          "duration": "5m",
          "actions": ["email", "webhook"]
        },
        "quotaWarning": {
          "condition": "usage > 80%",
          "actions": ["email", "ui_notification"]
        }
      }
    },
    "logging": {
      "levels": ["error", "warn", "info", "debug"],
      "retention": "30d"
    }
  },

  "security": {
    "authentication": {
      "methods": {
        "email": {
          "enabled": true,
          "requireVerification": true
        },
        "oauth": {
          "providers": ["google", "github"],
          "enabled": true
        }
      },
      "sessions": {
        "duration": "24h",
        "renewalEnabled": true
      }
    },
    "authorization": {
      "roles": {
        "admin": {
          "permissions": ["*"]
        },
        "user": {
          "permissions": [
            "pipeline:create",
            "pipeline:execute",
            "dashboard:create"
          ]
        },
        "viewer": {
          "permissions": [
            "dashboard:view",
            "pipeline:view"
          ]
        }
      }
    },
    "api": {
      "rateLimit": {
        "window": "1m",
        "max": 100
      },
      "keys": {
        "expiration": "90d",
        "rotation": {
          "enabled": true,
          "interval": "30d"
        }
      }
    }
  },

  "limits": {
    "system": {
      "pipeline": {
        "maxExecutionTime": 60,
        "maxConcurrent": 100,
        "maxRetries": 3
      },
      "template": {
        "maxNodes": 50,
        "maxConnections": 100
      },
      "storage": {
        "maxSize": "10GB",
        "maxRecords": 1000000
      }
    },
    "user": {
      "free": {
        "pipelines": 5,
        "executionsPerDay": 100,
        "storage": "1GB"
      },
      "pro": {
        "pipelines": 50,
        "executionsPerDay": 1000,
        "storage": "10GB"
      },
      "enterprise": {
        "pipelines": "unlimited",
        "executionsPerDay": "unlimited",
        "storage": "100GB"
      }
    }
  }
}
```


## Модельн монетизации
### Основная модель - Freemium с тремя уровнями:
```json
{
  "pricingPlans": {
    "free": {
      "price": 0,
      "limits": {
        "pipelines": {
          "active": 3,
          "executionsPerDay": 100
        },
        "storage": {
          "size": "1GB",
          "retention": "7d"
        },
        "features": {
          "templates": ["basic"],
          "triggers": ["manual", "schedule"],
          "dashboards": 1
        }
      }
    },
    "pro": {
      "price": 49,
      "billing": "monthly",
      "limits": {
        "pipelines": {
          "active": 20,
          "executionsPerDay": 1000
        },
        "storage": {
          "size": "10GB",
          "retention": "30d"
        },
        "features": {
          "templates": ["basic", "advanced"],
          "triggers": ["manual", "schedule", "webhook"],
          "dashboards": 5,
          "teamMembers": 5
        }
      }
    },
    "enterprise": {
      "price": "custom",
      "billing": "annual",
      "limits": {
        "pipelines": {
          "active": "unlimited",
          "executionsPerDay": "custom"
        },
        "storage": {
          "size": "custom",
          "retention": "custom"
        },
        "features": {
          "templates": ["basic", "advanced", "custom"],
          "triggers": ["all"],
          "dashboards": "unlimited",
          "teamMembers": "unlimited"
        }
      }
    }
  }
}
```
