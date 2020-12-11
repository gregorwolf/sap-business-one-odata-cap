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
exports.GetChangeLogParams = exports.GetChangeLogParamsField = exports.createGetChangeLogParams = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[GetChangeLogParams.build]] instead.
 */
function createGetChangeLogParams(json) {
    return GetChangeLogParams.build(json);
}
exports.createGetChangeLogParams = createGetChangeLogParams;
/**
 * GetChangeLogParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var GetChangeLogParamsField = /** @class */ (function (_super) {
    __extends(GetChangeLogParamsField, _super);
    /**
     * Creates an instance of GetChangeLogParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function GetChangeLogParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, GetChangeLogParams) || this;
        /**
         * Representation of the [[GetChangeLogParams.primaryKey]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.primaryKey = new core_1.ComplexTypeStringPropertyField('PrimaryKey', _this, 'Edm.String');
        /**
         * Representation of the [[GetChangeLogParams.udoObjectCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.udoObjectCode = new core_1.ComplexTypeStringPropertyField('UDOObjectCode', _this, 'Edm.String');
        /**
         * Representation of the [[GetChangeLogParams.object]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.object = new core_1.ComplexTypeEnumPropertyField('Object', _this);
        return _this;
    }
    return GetChangeLogParamsField;
}(core_1.ComplexTypeField));
exports.GetChangeLogParamsField = GetChangeLogParamsField;
var GetChangeLogParams;
(function (GetChangeLogParams) {
    /**
     * Metadata information on all properties of the `GetChangeLogParams` complex type.
     */
    GetChangeLogParams._propertyMetadata = [{
            originalName: 'PrimaryKey',
            name: 'primaryKey',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'UDOObjectCode',
            name: 'udoObjectCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Object',
            name: 'object',
            type: 'Edm.Enum',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, GetChangeLogParams);
    }
    GetChangeLogParams.build = build;
})(GetChangeLogParams = exports.GetChangeLogParams || (exports.GetChangeLogParams = {}));
//# sourceMappingURL=GetChangeLogParams.js.map