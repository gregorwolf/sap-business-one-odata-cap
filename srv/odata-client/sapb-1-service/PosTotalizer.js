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
exports.PosTotalizer = exports.PosTotalizerField = exports.createPosTotalizer = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[PosTotalizer.build]] instead.
 */
function createPosTotalizer(json) {
    return PosTotalizer.build(json);
}
exports.createPosTotalizer = createPosTotalizer;
/**
 * PosTotalizerField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var PosTotalizerField = /** @class */ (function (_super) {
    __extends(PosTotalizerField, _super);
    function PosTotalizerField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[PosTotalizer.lineNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNum = new v4_1.ComplexTypeNumberPropertyField('LineNum', _this, 'Edm.Int32');
        /**
         * Representation of the [[PosTotalizer.code]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.code = new v4_1.ComplexTypeStringPropertyField('Code', _this, 'Edm.String');
        /**
         * Representation of the [[PosTotalizer.number]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.number = new v4_1.ComplexTypeNumberPropertyField('Number', _this, 'Edm.Int32');
        /**
         * Representation of the [[PosTotalizer.total]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.total = new v4_1.ComplexTypeNumberPropertyField('Total', _this, 'Edm.Double');
        /**
         * Representation of the [[PosTotalizer.description]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.description = new v4_1.ComplexTypeStringPropertyField('Description', _this, 'Edm.String');
        return _this;
    }
    return PosTotalizerField;
}(v4_1.ComplexTypeField));
exports.PosTotalizerField = PosTotalizerField;
var PosTotalizer;
(function (PosTotalizer) {
    function build(json) {
        return v4_1.createComplexType(json, {
            LineNum: function (lineNum) { return ({ lineNum: v4_1.edmToTs(lineNum, 'Edm.Int32') }); },
            Code: function (code) { return ({ code: v4_1.edmToTs(code, 'Edm.String') }); },
            Number: function (number) { return ({ number: v4_1.edmToTs(number, 'Edm.Int32') }); },
            Total: function (total) { return ({ total: v4_1.edmToTs(total, 'Edm.Double') }); },
            Description: function (description) { return ({ description: v4_1.edmToTs(description, 'Edm.String') }); }
        });
    }
    PosTotalizer.build = build;
})(PosTotalizer = exports.PosTotalizer || (exports.PosTotalizer = {}));
//# sourceMappingURL=PosTotalizer.js.map