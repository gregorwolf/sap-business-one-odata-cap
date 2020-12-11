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
exports.IntrastatConfigurationParams = exports.IntrastatConfigurationParamsField = exports.createIntrastatConfigurationParams = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[IntrastatConfigurationParams.build]] instead.
 */
function createIntrastatConfigurationParams(json) {
    return IntrastatConfigurationParams.build(json);
}
exports.createIntrastatConfigurationParams = createIntrastatConfigurationParams;
/**
 * IntrastatConfigurationParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var IntrastatConfigurationParamsField = /** @class */ (function (_super) {
    __extends(IntrastatConfigurationParamsField, _super);
    /**
     * Creates an instance of IntrastatConfigurationParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function IntrastatConfigurationParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, IntrastatConfigurationParams) || this;
        /**
         * Representation of the [[IntrastatConfigurationParams.absEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.absEntry = new core_1.ComplexTypeNumberPropertyField('AbsEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[IntrastatConfigurationParams.confType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.confType = new core_1.ComplexTypeEnumPropertyField('ConfType', _this);
        /**
         * Representation of the [[IntrastatConfigurationParams.code]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.code = new core_1.ComplexTypeStringPropertyField('Code', _this, 'Edm.String');
        /**
         * Representation of the [[IntrastatConfigurationParams.statCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.statCode = new core_1.ComplexTypeStringPropertyField('StatCode', _this, 'Edm.String');
        /**
         * Representation of the [[IntrastatConfigurationParams.dateFrom]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.dateFrom = new core_1.ComplexTypeDatePropertyField('DateFrom', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[IntrastatConfigurationParams.dateTo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.dateTo = new core_1.ComplexTypeDatePropertyField('DateTo', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[IntrastatConfigurationParams.country]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.country = new core_1.ComplexTypeStringPropertyField('Country', _this, 'Edm.String');
        return _this;
    }
    return IntrastatConfigurationParamsField;
}(core_1.ComplexTypeField));
exports.IntrastatConfigurationParamsField = IntrastatConfigurationParamsField;
var IntrastatConfigurationParams;
(function (IntrastatConfigurationParams) {
    /**
     * Metadata information on all properties of the `IntrastatConfigurationParams` complex type.
     */
    IntrastatConfigurationParams._propertyMetadata = [{
            originalName: 'AbsEntry',
            name: 'absEntry',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'ConfType',
            name: 'confType',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'Code',
            name: 'code',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'StatCode',
            name: 'statCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'DateFrom',
            name: 'dateFrom',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'DateTo',
            name: 'dateTo',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'Country',
            name: 'country',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, IntrastatConfigurationParams);
    }
    IntrastatConfigurationParams.build = build;
})(IntrastatConfigurationParams = exports.IntrastatConfigurationParams || (exports.IntrastatConfigurationParams = {}));
//# sourceMappingURL=IntrastatConfigurationParams.js.map