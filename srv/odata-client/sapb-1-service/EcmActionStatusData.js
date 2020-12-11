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
exports.EcmActionStatusData = exports.EcmActionStatusDataField = exports.createEcmActionStatusData = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[EcmActionStatusData.build]] instead.
 */
function createEcmActionStatusData(json) {
    return EcmActionStatusData.build(json);
}
exports.createEcmActionStatusData = createEcmActionStatusData;
/**
 * EcmActionStatusDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var EcmActionStatusDataField = /** @class */ (function (_super) {
    __extends(EcmActionStatusDataField, _super);
    /**
     * Creates an instance of EcmActionStatusDataField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function EcmActionStatusDataField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, EcmActionStatusData) || this;
        /**
         * Representation of the [[EcmActionStatusData.absEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.absEntry = new core_1.ComplexTypeNumberPropertyField('AbsEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[EcmActionStatusData.actStatus]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.actStatus = new core_1.ComplexTypeEnumPropertyField('ActStatus', _this);
        /**
         * Representation of the [[EcmActionStatusData.reportId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.reportId = new core_1.ComplexTypeStringPropertyField('ReportID', _this, 'Edm.String');
        /**
         * Representation of the [[EcmActionStatusData.receivDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.receivDate = new core_1.ComplexTypeDatePropertyField('ReceivDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[EcmActionStatusData.actMessage]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.actMessage = new core_1.ComplexTypeStringPropertyField('ActMessage', _this, 'Edm.String');
        return _this;
    }
    return EcmActionStatusDataField;
}(core_1.ComplexTypeField));
exports.EcmActionStatusDataField = EcmActionStatusDataField;
var EcmActionStatusData;
(function (EcmActionStatusData) {
    /**
     * Metadata information on all properties of the `EcmActionStatusData` complex type.
     */
    EcmActionStatusData._propertyMetadata = [{
            originalName: 'AbsEntry',
            name: 'absEntry',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'ActStatus',
            name: 'actStatus',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'ReportID',
            name: 'reportId',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ReceivDate',
            name: 'receivDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'ActMessage',
            name: 'actMessage',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, EcmActionStatusData);
    }
    EcmActionStatusData.build = build;
})(EcmActionStatusData = exports.EcmActionStatusData || (exports.EcmActionStatusData = {}));
//# sourceMappingURL=EcmActionStatusData.js.map