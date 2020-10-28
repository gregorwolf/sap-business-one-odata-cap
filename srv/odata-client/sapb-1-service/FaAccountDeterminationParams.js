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
exports.FaAccountDeterminationParams = exports.FaAccountDeterminationParamsField = exports.createFaAccountDeterminationParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[FaAccountDeterminationParams.build]] instead.
 */
function createFaAccountDeterminationParams(json) {
    return FaAccountDeterminationParams.build(json);
}
exports.createFaAccountDeterminationParams = createFaAccountDeterminationParams;
/**
 * FaAccountDeterminationParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var FaAccountDeterminationParamsField = /** @class */ (function (_super) {
    __extends(FaAccountDeterminationParamsField, _super);
    function FaAccountDeterminationParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[FaAccountDeterminationParams.code]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.code = new v4_1.ComplexTypeStringPropertyField('Code', _this, 'Edm.String');
        /**
         * Representation of the [[FaAccountDeterminationParams.description]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.description = new v4_1.ComplexTypeStringPropertyField('Description', _this, 'Edm.String');
        return _this;
    }
    return FaAccountDeterminationParamsField;
}(v4_1.ComplexTypeField));
exports.FaAccountDeterminationParamsField = FaAccountDeterminationParamsField;
var FaAccountDeterminationParams;
(function (FaAccountDeterminationParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            Code: function (code) { return ({ code: v4_1.edmToTs(code, 'Edm.String') }); },
            Description: function (description) { return ({ description: v4_1.edmToTs(description, 'Edm.String') }); }
        });
    }
    FaAccountDeterminationParams.build = build;
})(FaAccountDeterminationParams = exports.FaAccountDeterminationParams || (exports.FaAccountDeterminationParams = {}));
//# sourceMappingURL=FaAccountDeterminationParams.js.map