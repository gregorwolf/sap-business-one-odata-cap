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
exports.BrazilBeverageIndexerParams = exports.BrazilBeverageIndexerParamsField = exports.createBrazilBeverageIndexerParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[BrazilBeverageIndexerParams.build]] instead.
 */
function createBrazilBeverageIndexerParams(json) {
    return BrazilBeverageIndexerParams.build(json);
}
exports.createBrazilBeverageIndexerParams = createBrazilBeverageIndexerParams;
/**
 * BrazilBeverageIndexerParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var BrazilBeverageIndexerParamsField = /** @class */ (function (_super) {
    __extends(BrazilBeverageIndexerParamsField, _super);
    function BrazilBeverageIndexerParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[BrazilBeverageIndexerParams.beverageId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.beverageId = new v4_1.ComplexTypeNumberPropertyField('BeverageID', _this, 'Edm.Int32');
        return _this;
    }
    return BrazilBeverageIndexerParamsField;
}(v4_1.ComplexTypeField));
exports.BrazilBeverageIndexerParamsField = BrazilBeverageIndexerParamsField;
var BrazilBeverageIndexerParams;
(function (BrazilBeverageIndexerParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            BeverageID: function (beverageId) { return ({ beverageId: v4_1.edmToTs(beverageId, 'Edm.Int32') }); }
        });
    }
    BrazilBeverageIndexerParams.build = build;
})(BrazilBeverageIndexerParams = exports.BrazilBeverageIndexerParams || (exports.BrazilBeverageIndexerParams = {}));
//# sourceMappingURL=BrazilBeverageIndexerParams.js.map