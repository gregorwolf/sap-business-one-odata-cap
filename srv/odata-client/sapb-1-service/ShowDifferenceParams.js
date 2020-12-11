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
exports.ShowDifferenceParams = exports.ShowDifferenceParamsField = exports.createShowDifferenceParams = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[ShowDifferenceParams.build]] instead.
 */
function createShowDifferenceParams(json) {
    return ShowDifferenceParams.build(json);
}
exports.createShowDifferenceParams = createShowDifferenceParams;
/**
 * ShowDifferenceParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ShowDifferenceParamsField = /** @class */ (function (_super) {
    __extends(ShowDifferenceParamsField, _super);
    /**
     * Creates an instance of ShowDifferenceParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function ShowDifferenceParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, ShowDifferenceParams) || this;
        /**
         * Representation of the [[ShowDifferenceParams.primaryKey]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.primaryKey = new core_1.ComplexTypeStringPropertyField('PrimaryKey', _this, 'Edm.String');
        /**
         * Representation of the [[ShowDifferenceParams.udoObjectCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.udoObjectCode = new core_1.ComplexTypeStringPropertyField('UDOObjectCode', _this, 'Edm.String');
        /**
         * Representation of the [[ShowDifferenceParams.object]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.object = new core_1.ComplexTypeEnumPropertyField('Object', _this);
        /**
         * Representation of the [[ShowDifferenceParams.logInstance2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.logInstance2 = new core_1.ComplexTypeNumberPropertyField('LogInstance2', _this, 'Edm.Int32');
        /**
         * Representation of the [[ShowDifferenceParams.logInstance]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.logInstance = new core_1.ComplexTypeNumberPropertyField('LogInstance', _this, 'Edm.Int32');
        return _this;
    }
    return ShowDifferenceParamsField;
}(core_1.ComplexTypeField));
exports.ShowDifferenceParamsField = ShowDifferenceParamsField;
var ShowDifferenceParams;
(function (ShowDifferenceParams) {
    /**
     * Metadata information on all properties of the `ShowDifferenceParams` complex type.
     */
    ShowDifferenceParams._propertyMetadata = [{
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
        }, {
            originalName: 'LogInstance2',
            name: 'logInstance2',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'LogInstance',
            name: 'logInstance',
            type: 'Edm.Int32',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, ShowDifferenceParams);
    }
    ShowDifferenceParams.build = build;
})(ShowDifferenceParams = exports.ShowDifferenceParams || (exports.ShowDifferenceParams = {}));
//# sourceMappingURL=ShowDifferenceParams.js.map