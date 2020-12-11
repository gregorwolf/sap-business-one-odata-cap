"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
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
var core_1 = require("@sap-cloud-sdk/core");
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
    /**
     * Creates an instance of EcmActionLogField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function EcmActionLogField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, EcmActionLog) || this;
        /**
         * Representation of the [[EcmActionLog.actionId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.actionId = new core_1.ComplexTypeNumberPropertyField('ActionID', _this, 'Edm.Int32');
        /**
         * Representation of the [[EcmActionLog.logId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.logId = new core_1.ComplexTypeNumberPropertyField('LogID', _this, 'Edm.Int32');
        /**
         * Representation of the [[EcmActionLog.type]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.type = new core_1.ComplexTypeEnumPropertyField('Type', _this);
        /**
         * Representation of the [[EcmActionLog.message]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.message = new core_1.ComplexTypeStringPropertyField('Message', _this, 'Edm.String');
        /**
         * Representation of the [[EcmActionLog.data]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.data = new core_1.ComplexTypeStringPropertyField('Data', _this, 'Edm.String');
        /**
         * Representation of the [[EcmActionLog.logDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.logDate = new core_1.ComplexTypeDatePropertyField('LogDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[EcmActionLog.logTime]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.logTime = new core_1.ComplexTypeNumberPropertyField('LogTime', _this, 'Edm.Int32');
        /**
         * Representation of the [[EcmActionLog.exportFormat]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.exportFormat = new core_1.ComplexTypeNumberPropertyField('ExportFormat', _this, 'Edm.Int32');
        return _this;
    }
    return EcmActionLogField;
}(core_1.ComplexTypeField));
exports.EcmActionLogField = EcmActionLogField;
var EcmActionLog;
(function (EcmActionLog) {
    /**
     * Metadata information on all properties of the `EcmActionLog` complex type.
     */
    EcmActionLog._propertyMetadata = [{
            originalName: 'ActionID',
            name: 'actionId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'LogID',
            name: 'logId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Type',
            name: 'type',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'Message',
            name: 'message',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Data',
            name: 'data',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'LogDate',
            name: 'logDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'LogTime',
            name: 'logTime',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'ExportFormat',
            name: 'exportFormat',
            type: 'Edm.Int32',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, EcmActionLog);
    }
    EcmActionLog.build = build;
})(EcmActionLog = exports.EcmActionLog || (exports.EcmActionLog = {}));
//# sourceMappingURL=EcmActionLog.js.map