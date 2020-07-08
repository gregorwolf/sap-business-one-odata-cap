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
exports.AttributeGroupParams = exports.AttributeGroupParamsField = exports.createAttributeGroupParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[AttributeGroupParams.build]] instead.
 */
function createAttributeGroupParams(json) {
    return AttributeGroupParams.build(json);
}
exports.createAttributeGroupParams = createAttributeGroupParams;
/**
 * AttributeGroupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var AttributeGroupParamsField = /** @class */ (function (_super) {
    __extends(AttributeGroupParamsField, _super);
    function AttributeGroupParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[AttributeGroupParams.code]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.code = new v4_1.ComplexTypeNumberPropertyField('Code', _this, 'Edm.Int32');
        /**
         * Representation of the [[AttributeGroupParams.name]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.name = new v4_1.ComplexTypeStringPropertyField('Name', _this, 'Edm.String');
        return _this;
    }
    return AttributeGroupParamsField;
}(v4_1.ComplexTypeField));
exports.AttributeGroupParamsField = AttributeGroupParamsField;
var AttributeGroupParams;
(function (AttributeGroupParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            Code: function (code) { return ({ code: v4_1.edmToTs(code, 'Edm.Int32') }); },
            Name: function (name) { return ({ name: v4_1.edmToTs(name, 'Edm.String') }); }
        });
    }
    AttributeGroupParams.build = build;
})(AttributeGroupParams = exports.AttributeGroupParams || (exports.AttributeGroupParams = {}));
//# sourceMappingURL=AttributeGroupParams.js.map