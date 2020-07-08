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
exports.AttributeGroupLine = exports.AttributeGroupLineField = exports.createAttributeGroupLine = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[AttributeGroupLine.build]] instead.
 */
function createAttributeGroupLine(json) {
    return AttributeGroupLine.build(json);
}
exports.createAttributeGroupLine = createAttributeGroupLine;
/**
 * AttributeGroupLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var AttributeGroupLineField = /** @class */ (function (_super) {
    __extends(AttributeGroupLineField, _super);
    function AttributeGroupLineField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[AttributeGroupLine.code]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.code = new v4_1.ComplexTypeNumberPropertyField('Code', _this, 'Edm.Int32');
        /**
         * Representation of the [[AttributeGroupLine.sortNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sortNumber = new v4_1.ComplexTypeNumberPropertyField('SortNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[AttributeGroupLine.attributeId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attributeId = new v4_1.ComplexTypeNumberPropertyField('AttributeID', _this, 'Edm.Int32');
        /**
         * Representation of the [[AttributeGroupLine.attributeName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attributeName = new v4_1.ComplexTypeStringPropertyField('AttributeName', _this, 'Edm.String');
        /**
         * Representation of the [[AttributeGroupLine.defaultValue]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.defaultValue = new v4_1.ComplexTypeStringPropertyField('DefaultValue', _this, 'Edm.String');
        return _this;
    }
    return AttributeGroupLineField;
}(v4_1.ComplexTypeField));
exports.AttributeGroupLineField = AttributeGroupLineField;
var AttributeGroupLine;
(function (AttributeGroupLine) {
    function build(json) {
        return v4_1.createComplexType(json, {
            Code: function (code) { return ({ code: v4_1.edmToTs(code, 'Edm.Int32') }); },
            SortNumber: function (sortNumber) { return ({ sortNumber: v4_1.edmToTs(sortNumber, 'Edm.Int32') }); },
            AttributeID: function (attributeId) { return ({ attributeId: v4_1.edmToTs(attributeId, 'Edm.Int32') }); },
            AttributeName: function (attributeName) { return ({ attributeName: v4_1.edmToTs(attributeName, 'Edm.String') }); },
            DefaultValue: function (defaultValue) { return ({ defaultValue: v4_1.edmToTs(defaultValue, 'Edm.String') }); }
        });
    }
    AttributeGroupLine.build = build;
})(AttributeGroupLine = exports.AttributeGroupLine || (exports.AttributeGroupLine = {}));
//# sourceMappingURL=AttributeGroupLine.js.map