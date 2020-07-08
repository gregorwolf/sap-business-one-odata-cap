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
exports.Forms1099Params = exports.Forms1099ParamsField = exports.createForms1099Params = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[Forms1099Params.build]] instead.
 */
function createForms1099Params(json) {
    return Forms1099Params.build(json);
}
exports.createForms1099Params = createForms1099Params;
/**
 * Forms1099ParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var Forms1099ParamsField = /** @class */ (function (_super) {
    __extends(Forms1099ParamsField, _super);
    function Forms1099ParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[Forms1099Params.formCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.formCode = new v4_1.ComplexTypeNumberPropertyField('FormCode', _this, 'Edm.Int32');
        return _this;
    }
    return Forms1099ParamsField;
}(v4_1.ComplexTypeField));
exports.Forms1099ParamsField = Forms1099ParamsField;
var Forms1099Params;
(function (Forms1099Params) {
    function build(json) {
        return v4_1.createComplexType(json, {
            FormCode: function (formCode) { return ({ formCode: v4_1.edmToTs(formCode, 'Edm.Int32') }); }
        });
    }
    Forms1099Params.build = build;
})(Forms1099Params = exports.Forms1099Params || (exports.Forms1099Params = {}));
//# sourceMappingURL=Forms1099Params.js.map