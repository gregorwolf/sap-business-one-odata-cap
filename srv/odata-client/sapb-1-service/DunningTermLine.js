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
exports.DunningTermLine = exports.DunningTermLineField = exports.createDunningTermLine = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[DunningTermLine.build]] instead.
 */
function createDunningTermLine(json) {
    return DunningTermLine.build(json);
}
exports.createDunningTermLine = createDunningTermLine;
/**
 * DunningTermLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var DunningTermLineField = /** @class */ (function (_super) {
    __extends(DunningTermLineField, _super);
    function DunningTermLineField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[DunningTermLine.levelNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.levelNum = new v4_1.ComplexTypeNumberPropertyField('LevelNum', _this, 'Edm.Int32');
        /**
         * Representation of the [[DunningTermLine.effectiveafter]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.effectiveafter = new v4_1.ComplexTypeStringPropertyField('Effectiveafter', _this, 'Edm.String');
        /**
         * Representation of the [[DunningTermLine.letterFee]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.letterFee = new v4_1.ComplexTypeNumberPropertyField('LetterFee', _this, 'Edm.Double');
        /**
         * Representation of the [[DunningTermLine.letterFeeCurrency]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.letterFeeCurrency = new v4_1.ComplexTypeStringPropertyField('LetterFeeCurrency', _this, 'Edm.String');
        /**
         * Representation of the [[DunningTermLine.mininumBalance]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.mininumBalance = new v4_1.ComplexTypeNumberPropertyField('MininumBalance', _this, 'Edm.Double');
        /**
         * Representation of the [[DunningTermLine.mininumBalanceCurrency]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.mininumBalanceCurrency = new v4_1.ComplexTypeStringPropertyField('MininumBalanceCurrency', _this, 'Edm.String');
        return _this;
    }
    return DunningTermLineField;
}(v4_1.ComplexTypeField));
exports.DunningTermLineField = DunningTermLineField;
var DunningTermLine;
(function (DunningTermLine) {
    function build(json) {
        return v4_1.createComplexType(json, {
            LevelNum: function (levelNum) { return ({ levelNum: v4_1.edmToTs(levelNum, 'Edm.Int32') }); },
            Effectiveafter: function (effectiveafter) { return ({ effectiveafter: v4_1.edmToTs(effectiveafter, 'Edm.String') }); },
            LetterFee: function (letterFee) { return ({ letterFee: v4_1.edmToTs(letterFee, 'Edm.Double') }); },
            LetterFeeCurrency: function (letterFeeCurrency) { return ({ letterFeeCurrency: v4_1.edmToTs(letterFeeCurrency, 'Edm.String') }); },
            MininumBalance: function (mininumBalance) { return ({ mininumBalance: v4_1.edmToTs(mininumBalance, 'Edm.Double') }); },
            MininumBalanceCurrency: function (mininumBalanceCurrency) { return ({ mininumBalanceCurrency: v4_1.edmToTs(mininumBalanceCurrency, 'Edm.String') }); }
        });
    }
    DunningTermLine.build = build;
})(DunningTermLine = exports.DunningTermLine || (exports.DunningTermLine = {}));
//# sourceMappingURL=DunningTermLine.js.map