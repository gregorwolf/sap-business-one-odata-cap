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
exports.ValidValueMd = exports.ValidValueMdField = exports.createValidValueMd = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[ValidValueMd.build]] instead.
 */
function createValidValueMd(json) {
    return ValidValueMd.build(json);
}
exports.createValidValueMd = createValidValueMd;
/**
 * ValidValueMdField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ValidValueMdField = /** @class */ (function (_super) {
    __extends(ValidValueMdField, _super);
    function ValidValueMdField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ValidValueMd.value]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.value = new v4_1.ComplexTypeStringPropertyField('Value', _this, 'Edm.String');
        /**
         * Representation of the [[ValidValueMd.description]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.description = new v4_1.ComplexTypeStringPropertyField('Description', _this, 'Edm.String');
        return _this;
    }
    return ValidValueMdField;
}(v4_1.ComplexTypeField));
exports.ValidValueMdField = ValidValueMdField;
var ValidValueMd;
(function (ValidValueMd) {
    function build(json) {
        return v4_1.createComplexType(json, {
            Value: function (value) { return ({ value: v4_1.edmToTs(value, 'Edm.String') }); },
            Description: function (description) { return ({ description: v4_1.edmToTs(description, 'Edm.String') }); }
        });
    }
    ValidValueMd.build = build;
})(ValidValueMd = exports.ValidValueMd || (exports.ValidValueMd = {}));
//# sourceMappingURL=ValidValueMd.js.map