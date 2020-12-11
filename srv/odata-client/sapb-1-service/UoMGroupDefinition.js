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
exports.UoMGroupDefinition = exports.UoMGroupDefinitionField = exports.createUoMGroupDefinition = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[UoMGroupDefinition.build]] instead.
 */
function createUoMGroupDefinition(json) {
    return UoMGroupDefinition.build(json);
}
exports.createUoMGroupDefinition = createUoMGroupDefinition;
/**
 * UoMGroupDefinitionField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var UoMGroupDefinitionField = /** @class */ (function (_super) {
    __extends(UoMGroupDefinitionField, _super);
    /**
     * Creates an instance of UoMGroupDefinitionField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function UoMGroupDefinitionField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, UoMGroupDefinition) || this;
        /**
         * Representation of the [[UoMGroupDefinition.alternateUoM]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.alternateUoM = new core_1.ComplexTypeNumberPropertyField('AlternateUoM', _this, 'Edm.Int32');
        /**
         * Representation of the [[UoMGroupDefinition.alternateQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.alternateQuantity = new core_1.ComplexTypeNumberPropertyField('AlternateQuantity', _this, 'Edm.Double');
        /**
         * Representation of the [[UoMGroupDefinition.baseQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseQuantity = new core_1.ComplexTypeNumberPropertyField('BaseQuantity', _this, 'Edm.Double');
        /**
         * Representation of the [[UoMGroupDefinition.weightFactor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.weightFactor = new core_1.ComplexTypeNumberPropertyField('WeightFactor', _this, 'Edm.Int32');
        /**
         * Representation of the [[UoMGroupDefinition.udfFactor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.udfFactor = new core_1.ComplexTypeNumberPropertyField('UdfFactor', _this, 'Edm.Int32');
        return _this;
    }
    return UoMGroupDefinitionField;
}(core_1.ComplexTypeField));
exports.UoMGroupDefinitionField = UoMGroupDefinitionField;
var UoMGroupDefinition;
(function (UoMGroupDefinition) {
    /**
     * Metadata information on all properties of the `UoMGroupDefinition` complex type.
     */
    UoMGroupDefinition._propertyMetadata = [{
            originalName: 'AlternateUoM',
            name: 'alternateUoM',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'AlternateQuantity',
            name: 'alternateQuantity',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'BaseQuantity',
            name: 'baseQuantity',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'WeightFactor',
            name: 'weightFactor',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'UdfFactor',
            name: 'udfFactor',
            type: 'Edm.Int32',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, UoMGroupDefinition);
    }
    UoMGroupDefinition.build = build;
})(UoMGroupDefinition = exports.UoMGroupDefinition || (exports.UoMGroupDefinition = {}));
//# sourceMappingURL=UoMGroupDefinition.js.map