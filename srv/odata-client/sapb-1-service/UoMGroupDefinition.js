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
exports.UoMGroupDefinition = exports.UoMGroupDefinitionField = exports.createUoMGroupDefinition = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
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
    function UoMGroupDefinitionField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[UoMGroupDefinition.alternateUoM]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.alternateUoM = new v4_1.ComplexTypeNumberPropertyField('AlternateUoM', _this, 'Edm.Int32');
        /**
         * Representation of the [[UoMGroupDefinition.alternateQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.alternateQuantity = new v4_1.ComplexTypeNumberPropertyField('AlternateQuantity', _this, 'Edm.Double');
        /**
         * Representation of the [[UoMGroupDefinition.baseQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseQuantity = new v4_1.ComplexTypeNumberPropertyField('BaseQuantity', _this, 'Edm.Double');
        /**
         * Representation of the [[UoMGroupDefinition.weightFactor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.weightFactor = new v4_1.ComplexTypeNumberPropertyField('WeightFactor', _this, 'Edm.Int32');
        /**
         * Representation of the [[UoMGroupDefinition.udfFactor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.udfFactor = new v4_1.ComplexTypeNumberPropertyField('UdfFactor', _this, 'Edm.Int32');
        return _this;
    }
    return UoMGroupDefinitionField;
}(v4_1.ComplexTypeField));
exports.UoMGroupDefinitionField = UoMGroupDefinitionField;
var UoMGroupDefinition;
(function (UoMGroupDefinition) {
    function build(json) {
        return v4_1.createComplexType(json, {
            AlternateUoM: function (alternateUoM) { return ({ alternateUoM: v4_1.edmToTs(alternateUoM, 'Edm.Int32') }); },
            AlternateQuantity: function (alternateQuantity) { return ({ alternateQuantity: v4_1.edmToTs(alternateQuantity, 'Edm.Double') }); },
            BaseQuantity: function (baseQuantity) { return ({ baseQuantity: v4_1.edmToTs(baseQuantity, 'Edm.Double') }); },
            WeightFactor: function (weightFactor) { return ({ weightFactor: v4_1.edmToTs(weightFactor, 'Edm.Int32') }); },
            UdfFactor: function (udfFactor) { return ({ udfFactor: v4_1.edmToTs(udfFactor, 'Edm.Int32') }); }
        });
    }
    UoMGroupDefinition.build = build;
})(UoMGroupDefinition = exports.UoMGroupDefinition || (exports.UoMGroupDefinition = {}));
//# sourceMappingURL=UoMGroupDefinition.js.map