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
exports.FormattedSearchParams = exports.FormattedSearchParamsField = exports.createFormattedSearchParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[FormattedSearchParams.build]] instead.
 */
function createFormattedSearchParams(json) {
    return FormattedSearchParams.build(json);
}
exports.createFormattedSearchParams = createFormattedSearchParams;
/**
 * FormattedSearchParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var FormattedSearchParamsField = /** @class */ (function (_super) {
    __extends(FormattedSearchParamsField, _super);
    function FormattedSearchParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[FormattedSearchParams.index]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.index = new v4_1.ComplexTypeNumberPropertyField('Index', _this, 'Edm.Int32');
        return _this;
    }
    return FormattedSearchParamsField;
}(v4_1.ComplexTypeField));
exports.FormattedSearchParamsField = FormattedSearchParamsField;
var FormattedSearchParams;
(function (FormattedSearchParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            Index: function (index) { return ({ index: v4_1.edmToTs(index, 'Edm.Int32') }); }
        });
    }
    FormattedSearchParams.build = build;
})(FormattedSearchParams = exports.FormattedSearchParams || (exports.FormattedSearchParams = {}));
//# sourceMappingURL=FormattedSearchParams.js.map