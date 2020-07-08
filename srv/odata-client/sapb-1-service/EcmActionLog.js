"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.EcmActionLog = exports.EcmActionLogField = exports.createEcmActionLog = void 0;
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[EcmActionLog.build]] instead.
 */
function createEcmActionLog(json) {
    return EcmActionLog.build(json);
}
exports.createEcmActionLog = createEcmActionLog;
/**
 * EcmActionLogField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var EcmActionLogField = /** @class */ (function (_super) {
    __extends(EcmActionLogField, _super);
    function EcmActionLogField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[EcmActionLog.actionId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.actionId = new v4_1.ComplexTypeNumberPropertyField('ActionID', _this, 'Edm.Int32');
        /**
         * Representation of the [[EcmActionLog.logId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.logId = new v4_1.ComplexTypeNumberPropertyField('LogID', _this, 'Edm.Int32');
        /**
         * Representation of the [[EcmActionLog.message]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.message = new v4_1.ComplexTypeStringPropertyField('Message', _this, 'Edm.String');
        /**
         * Representation of the [[EcmActionLog.data]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.data = new v4_1.ComplexTypeStringPropertyField('Data', _this, 'Edm.String');
        /**
         * Representation of the [[EcmActionLog.logDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.logDate = new v4_1.ComplexTypeDatePropertyField('LogDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[EcmActionLog.logTime]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.logTime = new v4_1.ComplexTypeNumberPropertyField('LogTime', _this, 'Edm.Int32');
        /**
         * Representation of the [[EcmActionLog.exportFormat]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.exportFormat = new v4_1.ComplexTypeNumberPropertyField('ExportFormat', _this, 'Edm.Int32');
        return _this;
    }
    return EcmActionLogField;
}(v4_1.ComplexTypeField));
exports.EcmActionLogField = EcmActionLogField;
var EcmActionLog;
(function (EcmActionLog) {
    function build(json) {
        return v4_1.createComplexType(json, {
            ActionID: function (actionId) { return ({ actionId: v4_1.edmToTs(actionId, 'Edm.Int32') }); },
            LogID: function (logId) { return ({ logId: v4_1.edmToTs(logId, 'Edm.Int32') }); },
            Message: function (message) { return ({ message: v4_1.edmToTs(message, 'Edm.String') }); },
            Data: function (data) { return ({ data: v4_1.edmToTs(data, 'Edm.String') }); },
            LogDate: function (logDate) { return ({ logDate: v4_1.edmToTs(logDate, 'Edm.DateTimeOffset') }); },
            LogTime: function (logTime) { return ({ logTime: v4_1.edmToTs(logTime, 'Edm.Int32') }); },
            ExportFormat: function (exportFormat) { return ({ exportFormat: v4_1.edmToTs(exportFormat, 'Edm.Int32') }); }
        });
    }
    EcmActionLog.build = build;
})(EcmActionLog = exports.EcmActionLog || (exports.EcmActionLog = {}));
//# sourceMappingURL=EcmActionLog.js.map