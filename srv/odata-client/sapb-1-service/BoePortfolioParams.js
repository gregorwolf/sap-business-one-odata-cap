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
exports.BoePortfolioParams = exports.BoePortfolioParamsField = exports.createBoePortfolioParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[BoePortfolioParams.build]] instead.
 */
function createBoePortfolioParams(json) {
    return BoePortfolioParams.build(json);
}
exports.createBoePortfolioParams = createBoePortfolioParams;
/**
 * BoePortfolioParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var BoePortfolioParamsField = /** @class */ (function (_super) {
    __extends(BoePortfolioParamsField, _super);
    function BoePortfolioParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[BoePortfolioParams.portfolioEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.portfolioEntry = new v4_1.ComplexTypeNumberPropertyField('PortfolioEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[BoePortfolioParams.portfolioId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.portfolioId = new v4_1.ComplexTypeStringPropertyField('PortfolioID', _this, 'Edm.String');
        /**
         * Representation of the [[BoePortfolioParams.portfolioCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.portfolioCode = new v4_1.ComplexTypeStringPropertyField('PortfolioCode', _this, 'Edm.String');
        return _this;
    }
    return BoePortfolioParamsField;
}(v4_1.ComplexTypeField));
exports.BoePortfolioParamsField = BoePortfolioParamsField;
var BoePortfolioParams;
(function (BoePortfolioParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            PortfolioEntry: function (portfolioEntry) { return ({ portfolioEntry: v4_1.edmToTs(portfolioEntry, 'Edm.Int32') }); },
            PortfolioID: function (portfolioId) { return ({ portfolioId: v4_1.edmToTs(portfolioId, 'Edm.String') }); },
            PortfolioCode: function (portfolioCode) { return ({ portfolioCode: v4_1.edmToTs(portfolioCode, 'Edm.String') }); }
        });
    }
    BoePortfolioParams.build = build;
})(BoePortfolioParams = exports.BoePortfolioParams || (exports.BoePortfolioParams = {}));
//# sourceMappingURL=BoePortfolioParams.js.map