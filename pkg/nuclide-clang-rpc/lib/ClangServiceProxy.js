"use strict";

let Observable;

module.exports = _client => {
  const remoteModule = {};

  remoteModule.compile = function (arg0, arg1, arg2, arg3) {
    return Observable.fromPromise(_client.marshalArguments(Array.from(arguments), [{
      name: "src",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }, {
      name: "contents",
      type: {
        kind: "string"
      }
    }, {
      name: "compilationDB",
      type: {
        kind: "nullable",
        type: {
          kind: "named",
          name: "ClangCompilationDatabase"
        }
      }
    }, {
      name: "defaultFlags",
      type: {
        kind: "nullable",
        type: {
          kind: "array",
          type: {
            kind: "string"
          }
        }
      }
    }]).then(args => {
      return _client.callRemoteFunction("ClangService/compile", "observable", args);
    })).concatMap(id => id).concatMap(value => {
      return _client.unmarshal(value, {
        kind: "nullable",
        type: {
          kind: "named",
          name: "ClangCompileResult"
        }
      });
    }).publish();
  };

  remoteModule.getCompletions = function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
    return _client.marshalArguments(Array.from(arguments), [{
      name: "src",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }, {
      name: "contents",
      type: {
        kind: "string"
      }
    }, {
      name: "line",
      type: {
        kind: "number"
      }
    }, {
      name: "column",
      type: {
        kind: "number"
      }
    }, {
      name: "tokenStartColumn",
      type: {
        kind: "number"
      }
    }, {
      name: "prefix",
      type: {
        kind: "string"
      }
    }, {
      name: "compilationDB",
      type: {
        kind: "nullable",
        type: {
          kind: "named",
          name: "ClangCompilationDatabase"
        }
      }
    }, {
      name: "defaultFlags",
      type: {
        kind: "nullable",
        type: {
          kind: "array",
          type: {
            kind: "string"
          }
        }
      }
    }]).then(args => {
      return _client.callRemoteFunction("ClangService/getCompletions", "promise", args);
    }).then(value => {
      return _client.unmarshal(value, {
        kind: "nullable",
        type: {
          kind: "array",
          type: {
            kind: "named",
            name: "ClangCompletion"
          }
        }
      });
    });
  };

  remoteModule.getDeclaration = function (arg0, arg1, arg2, arg3, arg4, arg5) {
    return _client.marshalArguments(Array.from(arguments), [{
      name: "src",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }, {
      name: "contents",
      type: {
        kind: "string"
      }
    }, {
      name: "line",
      type: {
        kind: "number"
      }
    }, {
      name: "column",
      type: {
        kind: "number"
      }
    }, {
      name: "compilationDB",
      type: {
        kind: "nullable",
        type: {
          kind: "named",
          name: "ClangCompilationDatabase"
        }
      }
    }, {
      name: "defaultFlags",
      type: {
        kind: "nullable",
        type: {
          kind: "array",
          type: {
            kind: "string"
          }
        }
      }
    }]).then(args => {
      return _client.callRemoteFunction("ClangService/getDeclaration", "promise", args);
    }).then(value => {
      return _client.unmarshal(value, {
        kind: "nullable",
        type: {
          kind: "named",
          name: "ClangDeclaration"
        }
      });
    });
  };

  remoteModule.getDeclarationInfo = function (arg0, arg1, arg2, arg3, arg4, arg5) {
    return _client.marshalArguments(Array.from(arguments), [{
      name: "src",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }, {
      name: "contents",
      type: {
        kind: "string"
      }
    }, {
      name: "line",
      type: {
        kind: "number"
      }
    }, {
      name: "column",
      type: {
        kind: "number"
      }
    }, {
      name: "compilationDB",
      type: {
        kind: "nullable",
        type: {
          kind: "named",
          name: "ClangCompilationDatabase"
        }
      }
    }, {
      name: "defaultFlags",
      type: {
        kind: "nullable",
        type: {
          kind: "array",
          type: {
            kind: "string"
          }
        }
      }
    }]).then(args => {
      return _client.callRemoteFunction("ClangService/getDeclarationInfo", "promise", args);
    }).then(value => {
      return _client.unmarshal(value, {
        kind: "nullable",
        type: {
          kind: "array",
          type: {
            kind: "named",
            name: "ClangCursor"
          }
        }
      });
    });
  };

  remoteModule.getRelatedSourceOrHeader = function (arg0, arg1) {
    return _client.marshalArguments(Array.from(arguments), [{
      name: "src",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }, {
      name: "compilationDB",
      type: {
        kind: "nullable",
        type: {
          kind: "named",
          name: "ClangCompilationDatabase"
        }
      }
    }]).then(args => {
      return _client.callRemoteFunction("ClangService/getRelatedSourceOrHeader", "promise", args);
    }).then(value => {
      return _client.unmarshal(value, {
        kind: "nullable",
        type: {
          kind: "named",
          name: "NuclideUri"
        }
      });
    });
  };

  remoteModule.getOutline = function (arg0, arg1, arg2, arg3) {
    return _client.marshalArguments(Array.from(arguments), [{
      name: "src",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }, {
      name: "contents",
      type: {
        kind: "string"
      }
    }, {
      name: "compilationDB",
      type: {
        kind: "nullable",
        type: {
          kind: "named",
          name: "ClangCompilationDatabase"
        }
      }
    }, {
      name: "defaultFlags",
      type: {
        kind: "nullable",
        type: {
          kind: "array",
          type: {
            kind: "string"
          }
        }
      }
    }]).then(args => {
      return _client.callRemoteFunction("ClangService/getOutline", "promise", args);
    }).then(value => {
      return _client.unmarshal(value, {
        kind: "nullable",
        type: {
          kind: "array",
          type: {
            kind: "named",
            name: "ClangOutlineTree"
          }
        }
      });
    });
  };

  remoteModule.getLocalReferences = function (arg0, arg1, arg2, arg3, arg4, arg5) {
    return _client.marshalArguments(Array.from(arguments), [{
      name: "src",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }, {
      name: "contents",
      type: {
        kind: "string"
      }
    }, {
      name: "line",
      type: {
        kind: "number"
      }
    }, {
      name: "column",
      type: {
        kind: "number"
      }
    }, {
      name: "compilationDB",
      type: {
        kind: "nullable",
        type: {
          kind: "named",
          name: "ClangCompilationDatabase"
        }
      }
    }, {
      name: "defaultFlags",
      type: {
        kind: "nullable",
        type: {
          kind: "array",
          type: {
            kind: "string"
          }
        }
      }
    }]).then(args => {
      return _client.callRemoteFunction("ClangService/getLocalReferences", "promise", args);
    }).then(value => {
      return _client.unmarshal(value, {
        kind: "nullable",
        type: {
          kind: "named",
          name: "ClangLocalReferences"
        }
      });
    });
  };

  remoteModule.formatCode = function (arg0, arg1, arg2, arg3, arg4) {
    return _client.marshalArguments(Array.from(arguments), [{
      name: "src",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }, {
      name: "contents",
      type: {
        kind: "string"
      }
    }, {
      name: "cursor",
      type: {
        kind: "number"
      }
    }, {
      name: "offset",
      type: {
        kind: "nullable",
        type: {
          kind: "number"
        }
      }
    }, {
      name: "length",
      type: {
        kind: "nullable",
        type: {
          kind: "number"
        }
      }
    }]).then(args => {
      return _client.callRemoteFunction("ClangService/formatCode", "promise", args);
    }).then(value => {
      return _client.unmarshal(value, {
        kind: "object",
        fields: [{
          name: "newCursor",
          type: {
            kind: "number"
          },
          optional: false
        }, {
          name: "formatted",
          type: {
            kind: "string"
          },
          optional: false
        }]
      });
    });
  };

  remoteModule.loadFlagsFromCompilationDatabaseAndCacheThem = function (arg0) {
    return _client.marshalArguments(Array.from(arguments), [{
      name: "db",
      type: {
        kind: "named",
        name: "ClangCompilationDatabase"
      }
    }]).then(args => {
      return _client.callRemoteFunction("ClangService/loadFlagsFromCompilationDatabaseAndCacheThem", "promise", args);
    }).then(value => {
      return _client.unmarshal(value, {
        kind: "map",
        keyType: {
          kind: "string"
        },
        valueType: {
          kind: "named",
          name: "ClangCompilationDatabaseEntry"
        }
      });
    });
  };

  remoteModule.resetForSource = function (arg0) {
    return _client.marshalArguments(Array.from(arguments), [{
      name: "src",
      type: {
        kind: "named",
        name: "NuclideUri"
      }
    }]).then(args => {
      return _client.callRemoteFunction("ClangService/resetForSource", "void", args);
    });
  };

  remoteModule.reset = function () {
    return _client.marshalArguments(Array.from(arguments), []).then(args => {
      return _client.callRemoteFunction("ClangService/reset", "void", args);
    });
  };

  remoteModule.dispose = function () {
    return _client.marshalArguments(Array.from(arguments), []).then(args => {
      return _client.callRemoteFunction("ClangService/dispose", "void", args);
    });
  };

  return remoteModule;
};

Object.defineProperty(module.exports, "inject", {
  value: function () {
    Observable = arguments[0];
  }
});
Object.defineProperty(module.exports, "defs", {
  value: {
    Object: {
      kind: "alias",
      name: "Object",
      location: {
        type: "builtin"
      }
    },
    Date: {
      kind: "alias",
      name: "Date",
      location: {
        type: "builtin"
      }
    },
    RegExp: {
      kind: "alias",
      name: "RegExp",
      location: {
        type: "builtin"
      }
    },
    Buffer: {
      kind: "alias",
      name: "Buffer",
      location: {
        type: "builtin"
      }
    },
    "fs.Stats": {
      kind: "alias",
      name: "fs.Stats",
      location: {
        type: "builtin"
      }
    },
    NuclideUri: {
      kind: "alias",
      name: "NuclideUri",
      location: {
        type: "builtin"
      }
    },
    atom$Point: {
      kind: "alias",
      name: "atom$Point",
      location: {
        type: "builtin"
      }
    },
    atom$Range: {
      kind: "alias",
      name: "atom$Range",
      location: {
        type: "builtin"
      }
    },
    ClangLocation: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "rpc-types.js",
        line: 21
      },
      name: "ClangLocation",
      definition: {
        kind: "object",
        fields: [{
          name: "file",
          type: {
            kind: "nullable",
            type: {
              kind: "named",
              name: "NuclideUri"
            }
          },
          optional: false
        }, {
          name: "point",
          type: {
            kind: "named",
            name: "atom$Point"
          },
          optional: false
        }]
      }
    },
    ClangSourceRange: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "rpc-types.js",
        line: 26
      },
      name: "ClangSourceRange",
      definition: {
        kind: "object",
        fields: [{
          name: "file",
          type: {
            kind: "nullable",
            type: {
              kind: "named",
              name: "NuclideUri"
            }
          },
          optional: false
        }, {
          name: "range",
          type: {
            kind: "named",
            name: "atom$Range"
          },
          optional: false
        }]
      }
    },
    ClangCompileResult: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "rpc-types.js",
        line: 31
      },
      name: "ClangCompileResult",
      definition: {
        kind: "object",
        fields: [{
          name: "diagnostics",
          type: {
            kind: "array",
            type: {
              kind: "object",
              fields: [{
                name: "spelling",
                type: {
                  kind: "string"
                },
                optional: false
              }, {
                name: "severity",
                type: {
                  kind: "number"
                },
                optional: false
              }, {
                name: "location",
                type: {
                  kind: "named",
                  name: "ClangLocation"
                },
                optional: false
              }, {
                name: "ranges",
                type: {
                  kind: "nullable",
                  type: {
                    kind: "array",
                    type: {
                      kind: "named",
                      name: "ClangSourceRange"
                    }
                  }
                },
                optional: false
              }, {
                name: "fixits",
                type: {
                  kind: "array",
                  type: {
                    kind: "object",
                    fields: [{
                      name: "range",
                      type: {
                        kind: "named",
                        name: "ClangSourceRange"
                      },
                      optional: false
                    }, {
                      name: "value",
                      type: {
                        kind: "string"
                      },
                      optional: false
                    }]
                  }
                },
                optional: true
              }, {
                name: "children",
                type: {
                  kind: "array",
                  type: {
                    kind: "object",
                    fields: [{
                      name: "spelling",
                      type: {
                        kind: "string"
                      },
                      optional: false
                    }, {
                      name: "location",
                      type: {
                        kind: "named",
                        name: "ClangLocation"
                      },
                      optional: false
                    }, {
                      name: "ranges",
                      type: {
                        kind: "array",
                        type: {
                          kind: "named",
                          name: "ClangSourceRange"
                        }
                      },
                      optional: false
                    }]
                  }
                },
                optional: true
              }]
            }
          },
          optional: false
        }, {
          name: "accurateFlags",
          type: {
            kind: "boolean"
          },
          optional: true
        }]
      }
    },
    ClangCompilationDatabase: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "rpc-types.js",
        line: 114
      },
      name: "ClangCompilationDatabase",
      definition: {
        kind: "object",
        fields: [{
          name: "file",
          type: {
            kind: "nullable",
            type: {
              kind: "string"
            }
          },
          optional: false
        }, {
          name: "flagsFile",
          type: {
            kind: "nullable",
            type: {
              kind: "string"
            }
          },
          optional: false
        }, {
          name: "libclangPath",
          type: {
            kind: "nullable",
            type: {
              kind: "string"
            }
          },
          optional: false
        }]
      }
    },
    compile: {
      kind: "function",
      name: "compile",
      location: {
        type: "source",
        fileName: "ClangService.js",
        line: 117
      },
      type: {
        location: {
          type: "source",
          fileName: "ClangService.js",
          line: 117
        },
        kind: "function",
        argumentTypes: [{
          name: "src",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }, {
          name: "contents",
          type: {
            kind: "string"
          }
        }, {
          name: "compilationDB",
          type: {
            kind: "nullable",
            type: {
              kind: "named",
              name: "ClangCompilationDatabase"
            }
          }
        }, {
          name: "defaultFlags",
          type: {
            kind: "nullable",
            type: {
              kind: "array",
              type: {
                kind: "string"
              }
            }
          }
        }],
        returnType: {
          kind: "observable",
          type: {
            kind: "nullable",
            type: {
              kind: "named",
              name: "ClangCompileResult"
            }
          }
        }
      }
    },
    ClangCompletion: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "rpc-types.js",
        line: 60
      },
      name: "ClangCompletion",
      definition: {
        kind: "object",
        fields: [{
          name: "chunks",
          type: {
            kind: "array",
            type: {
              kind: "object",
              fields: [{
                name: "spelling",
                type: {
                  kind: "string"
                },
                optional: false
              }, {
                name: "isPlaceHolder",
                type: {
                  kind: "boolean"
                },
                optional: true
              }, {
                name: "isOptional",
                type: {
                  kind: "boolean"
                },
                optional: true
              }, {
                name: "kind",
                type: {
                  kind: "string"
                },
                optional: true
              }]
            }
          },
          optional: false
        }, {
          name: "result_type",
          type: {
            kind: "string"
          },
          optional: false
        }, {
          name: "spelling",
          type: {
            kind: "string"
          },
          optional: false
        }, {
          name: "cursor_kind",
          type: {
            kind: "string"
          },
          optional: false
        }, {
          name: "brief_comment",
          type: {
            kind: "nullable",
            type: {
              kind: "string"
            }
          },
          optional: false
        }, {
          name: "typed_name",
          type: {
            kind: "string"
          },
          optional: false
        }]
      }
    },
    getCompletions: {
      kind: "function",
      name: "getCompletions",
      location: {
        type: "source",
        fileName: "ClangService.js",
        line: 139
      },
      type: {
        location: {
          type: "source",
          fileName: "ClangService.js",
          line: 139
        },
        kind: "function",
        argumentTypes: [{
          name: "src",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }, {
          name: "contents",
          type: {
            kind: "string"
          }
        }, {
          name: "line",
          type: {
            kind: "number"
          }
        }, {
          name: "column",
          type: {
            kind: "number"
          }
        }, {
          name: "tokenStartColumn",
          type: {
            kind: "number"
          }
        }, {
          name: "prefix",
          type: {
            kind: "string"
          }
        }, {
          name: "compilationDB",
          type: {
            kind: "nullable",
            type: {
              kind: "named",
              name: "ClangCompilationDatabase"
            }
          }
        }, {
          name: "defaultFlags",
          type: {
            kind: "nullable",
            type: {
              kind: "array",
              type: {
                kind: "string"
              }
            }
          }
        }],
        returnType: {
          kind: "promise",
          type: {
            kind: "nullable",
            type: {
              kind: "array",
              type: {
                kind: "named",
                name: "ClangCompletion"
              }
            }
          }
        }
      }
    },
    ClangDeclaration: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "rpc-types.js",
        line: 76
      },
      name: "ClangDeclaration",
      definition: {
        kind: "object",
        fields: [{
          name: "file",
          type: {
            kind: "named",
            name: "NuclideUri"
          },
          optional: false
        }, {
          name: "point",
          type: {
            kind: "named",
            name: "atom$Point"
          },
          optional: false
        }, {
          name: "spelling",
          type: {
            kind: "nullable",
            type: {
              kind: "string"
            }
          },
          optional: false
        }, {
          name: "type",
          type: {
            kind: "nullable",
            type: {
              kind: "string"
            }
          },
          optional: false
        }, {
          name: "extent",
          type: {
            kind: "named",
            name: "atom$Range"
          },
          optional: false
        }]
      }
    },
    getDeclaration: {
      kind: "function",
      name: "getDeclaration",
      location: {
        type: "source",
        fileName: "ClangService.js",
        line: 166
      },
      type: {
        location: {
          type: "source",
          fileName: "ClangService.js",
          line: 166
        },
        kind: "function",
        argumentTypes: [{
          name: "src",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }, {
          name: "contents",
          type: {
            kind: "string"
          }
        }, {
          name: "line",
          type: {
            kind: "number"
          }
        }, {
          name: "column",
          type: {
            kind: "number"
          }
        }, {
          name: "compilationDB",
          type: {
            kind: "nullable",
            type: {
              kind: "named",
              name: "ClangCompilationDatabase"
            }
          }
        }, {
          name: "defaultFlags",
          type: {
            kind: "nullable",
            type: {
              kind: "array",
              type: {
                kind: "string"
              }
            }
          }
        }],
        returnType: {
          kind: "promise",
          type: {
            kind: "nullable",
            type: {
              kind: "named",
              name: "ClangDeclaration"
            }
          }
        }
      }
    },
    ClangCursorType: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "rpc-types.js",
        line: 19
      },
      name: "ClangCursorType",
      definition: {
        kind: "string"
      }
    },
    ClangCursor: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "rpc-types.js",
        line: 84
      },
      name: "ClangCursor",
      definition: {
        kind: "object",
        fields: [{
          name: "name",
          type: {
            kind: "string"
          },
          optional: false
        }, {
          name: "type",
          type: {
            kind: "named",
            name: "ClangCursorType"
          },
          optional: false
        }, {
          name: "cursor_usr",
          type: {
            kind: "string"
          },
          optional: false
        }, {
          name: "file",
          type: {
            kind: "nullable",
            type: {
              kind: "named",
              name: "NuclideUri"
            }
          },
          optional: false
        }, {
          name: "extent",
          type: {
            kind: "named",
            name: "atom$Range"
          },
          optional: false
        }, {
          name: "is_definition",
          type: {
            kind: "boolean"
          },
          optional: false
        }]
      }
    },
    getDeclarationInfo: {
      kind: "function",
      name: "getDeclarationInfo",
      location: {
        type: "source",
        fileName: "ClangService.js",
        line: 188
      },
      type: {
        location: {
          type: "source",
          fileName: "ClangService.js",
          line: 188
        },
        kind: "function",
        argumentTypes: [{
          name: "src",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }, {
          name: "contents",
          type: {
            kind: "string"
          }
        }, {
          name: "line",
          type: {
            kind: "number"
          }
        }, {
          name: "column",
          type: {
            kind: "number"
          }
        }, {
          name: "compilationDB",
          type: {
            kind: "nullable",
            type: {
              kind: "named",
              name: "ClangCompilationDatabase"
            }
          }
        }, {
          name: "defaultFlags",
          type: {
            kind: "nullable",
            type: {
              kind: "array",
              type: {
                kind: "string"
              }
            }
          }
        }],
        returnType: {
          kind: "promise",
          type: {
            kind: "nullable",
            type: {
              kind: "array",
              type: {
                kind: "named",
                name: "ClangCursor"
              }
            }
          }
        }
      }
    },
    getRelatedSourceOrHeader: {
      kind: "function",
      name: "getRelatedSourceOrHeader",
      location: {
        type: "source",
        fileName: "ClangService.js",
        line: 207
      },
      type: {
        location: {
          type: "source",
          fileName: "ClangService.js",
          line: 207
        },
        kind: "function",
        argumentTypes: [{
          name: "src",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }, {
          name: "compilationDB",
          type: {
            kind: "nullable",
            type: {
              kind: "named",
              name: "ClangCompilationDatabase"
            }
          }
        }],
        returnType: {
          kind: "promise",
          type: {
            kind: "nullable",
            type: {
              kind: "named",
              name: "NuclideUri"
            }
          }
        }
      }
    },
    ClangOutlineTree: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "rpc-types.js",
        line: 93
      },
      name: "ClangOutlineTree",
      definition: {
        kind: "object",
        fields: [{
          name: "name",
          type: {
            kind: "string"
          },
          optional: false
        }, {
          name: "extent",
          type: {
            kind: "named",
            name: "atom$Range"
          },
          optional: false
        }, {
          name: "cursor_kind",
          type: {
            kind: "named",
            name: "ClangCursorType"
          },
          optional: false
        }, {
          name: "cursor_type",
          type: {
            kind: "string"
          },
          optional: true
        }, {
          name: "params",
          type: {
            kind: "array",
            type: {
              kind: "string"
            }
          },
          optional: true
        }, {
          name: "tparams",
          type: {
            kind: "array",
            type: {
              kind: "string"
            }
          },
          optional: true
        }, {
          name: "children",
          type: {
            kind: "array",
            type: {
              kind: "named",
              name: "ClangOutlineTree"
            }
          },
          optional: true
        }]
      }
    },
    getOutline: {
      kind: "function",
      name: "getOutline",
      location: {
        type: "source",
        fileName: "ClangService.js",
        line: 216
      },
      type: {
        location: {
          type: "source",
          fileName: "ClangService.js",
          line: 216
        },
        kind: "function",
        argumentTypes: [{
          name: "src",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }, {
          name: "contents",
          type: {
            kind: "string"
          }
        }, {
          name: "compilationDB",
          type: {
            kind: "nullable",
            type: {
              kind: "named",
              name: "ClangCompilationDatabase"
            }
          }
        }, {
          name: "defaultFlags",
          type: {
            kind: "nullable",
            type: {
              kind: "array",
              type: {
                kind: "string"
              }
            }
          }
        }],
        returnType: {
          kind: "promise",
          type: {
            kind: "nullable",
            type: {
              kind: "array",
              type: {
                kind: "named",
                name: "ClangOutlineTree"
              }
            }
          }
        }
      }
    },
    ClangLocalReferences: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "rpc-types.js",
        line: 108
      },
      name: "ClangLocalReferences",
      definition: {
        kind: "object",
        fields: [{
          name: "cursor_name",
          type: {
            kind: "string"
          },
          optional: false
        }, {
          name: "cursor_kind",
          type: {
            kind: "string"
          },
          optional: false
        }, {
          name: "references",
          type: {
            kind: "array",
            type: {
              kind: "named",
              name: "atom$Range"
            }
          },
          optional: false
        }]
      }
    },
    getLocalReferences: {
      kind: "function",
      name: "getLocalReferences",
      location: {
        type: "source",
        fileName: "ClangService.js",
        line: 234
      },
      type: {
        location: {
          type: "source",
          fileName: "ClangService.js",
          line: 234
        },
        kind: "function",
        argumentTypes: [{
          name: "src",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }, {
          name: "contents",
          type: {
            kind: "string"
          }
        }, {
          name: "line",
          type: {
            kind: "number"
          }
        }, {
          name: "column",
          type: {
            kind: "number"
          }
        }, {
          name: "compilationDB",
          type: {
            kind: "nullable",
            type: {
              kind: "named",
              name: "ClangCompilationDatabase"
            }
          }
        }, {
          name: "defaultFlags",
          type: {
            kind: "nullable",
            type: {
              kind: "array",
              type: {
                kind: "string"
              }
            }
          }
        }],
        returnType: {
          kind: "promise",
          type: {
            kind: "nullable",
            type: {
              kind: "named",
              name: "ClangLocalReferences"
            }
          }
        }
      }
    },
    formatCode: {
      kind: "function",
      name: "formatCode",
      location: {
        type: "source",
        fileName: "ClangService.js",
        line: 254
      },
      type: {
        location: {
          type: "source",
          fileName: "ClangService.js",
          line: 254
        },
        kind: "function",
        argumentTypes: [{
          name: "src",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }, {
          name: "contents",
          type: {
            kind: "string"
          }
        }, {
          name: "cursor",
          type: {
            kind: "number"
          }
        }, {
          name: "offset",
          type: {
            kind: "nullable",
            type: {
              kind: "number"
            }
          }
        }, {
          name: "length",
          type: {
            kind: "nullable",
            type: {
              kind: "number"
            }
          }
        }],
        returnType: {
          kind: "promise",
          type: {
            kind: "object",
            fields: [{
              name: "newCursor",
              type: {
                kind: "number"
              },
              optional: false
            }, {
              name: "formatted",
              type: {
                kind: "string"
              },
              optional: false
            }]
          }
        }
      }
    },
    ClangCompilationDatabaseEntry: {
      kind: "alias",
      location: {
        type: "source",
        fileName: "rpc-types.js",
        line: 131
      },
      name: "ClangCompilationDatabaseEntry",
      definition: {
        kind: "object",
        fields: [{
          name: "arguments",
          type: {
            kind: "array",
            type: {
              kind: "string"
            }
          },
          optional: false
        }, {
          name: "file",
          type: {
            kind: "string"
          },
          optional: false
        }, {
          name: "directory",
          type: {
            kind: "string"
          },
          optional: false
        }]
      }
    },
    loadFlagsFromCompilationDatabaseAndCacheThem: {
      kind: "function",
      name: "loadFlagsFromCompilationDatabaseAndCacheThem",
      location: {
        type: "source",
        fileName: "ClangService.js",
        line: 280
      },
      type: {
        location: {
          type: "source",
          fileName: "ClangService.js",
          line: 280
        },
        kind: "function",
        argumentTypes: [{
          name: "db",
          type: {
            kind: "named",
            name: "ClangCompilationDatabase"
          }
        }],
        returnType: {
          kind: "promise",
          type: {
            kind: "map",
            keyType: {
              kind: "string"
            },
            valueType: {
              kind: "named",
              name: "ClangCompilationDatabaseEntry"
            }
          }
        }
      }
    },
    resetForSource: {
      kind: "function",
      name: "resetForSource",
      location: {
        type: "source",
        fileName: "ClangService.js",
        line: 305
      },
      type: {
        location: {
          type: "source",
          fileName: "ClangService.js",
          line: 305
        },
        kind: "function",
        argumentTypes: [{
          name: "src",
          type: {
            kind: "named",
            name: "NuclideUri"
          }
        }],
        returnType: {
          kind: "void"
        }
      }
    },
    reset: {
      kind: "function",
      name: "reset",
      location: {
        type: "source",
        fileName: "ClangService.js",
        line: 312
      },
      type: {
        location: {
          type: "source",
          fileName: "ClangService.js",
          line: 312
        },
        kind: "function",
        argumentTypes: [],
        returnType: {
          kind: "void"
        }
      }
    },
    dispose: {
      kind: "function",
      name: "dispose",
      location: {
        type: "source",
        fileName: "ClangService.js",
        line: 316
      },
      type: {
        location: {
          type: "source",
          fileName: "ClangService.js",
          line: 316
        },
        kind: "function",
        argumentTypes: [],
        returnType: {
          kind: "void"
        }
      }
    }
  }
});