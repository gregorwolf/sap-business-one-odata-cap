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
exports.Boxes1099 = exports.Boxes1099Field = exports.createBoxes1099 = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[Boxes1099.build]] instead.
 */
function createBoxes1099(json) {
    return Boxes1099.build(json);
}
exports.createBoxes1099 = createBoxes1099;
/**
 * Boxes1099Field
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var Boxes1099Field = /** @class */ (function (_super) {
    __extends(Boxes1099Field, _super);
    function Boxes1099Field() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[Boxes1099.formCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.formCode = new v4_1.ComplexTypeNumberPropertyField('FormCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[Boxes1099.box1099]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.box1099 = new v4_1.ComplexTypeStringPropertyField('Box1099', _this, 'Edm.String');
        /**
         * Representation of the [[Boxes1099.boxDescription]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.boxDescription = new v4_1.ComplexTypeStringPropertyField('BoxDescription', _this, 'Edm.String');
        /**
         * Representation of the [[Boxes1099.minimum1099Amount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.minimum1099Amount = new v4_1.ComplexTypeNumberPropertyField('Minimum1099Amount', _this, 'Edm.Double');
        return _this;
    }
    return Boxes1099Field;
}(v4_1.ComplexTypeField));
exports.Boxes1099Field = Boxes1099Field;
var Boxes1099;
(function (Boxes1099) {
    function build(json) {
        return v4_1.createComplexType(json, {
            FormCode: function (formCode) { return ({ formCode: v4_1.edmToTs(formCode, 'Edm.Int32') }); },
            Box1099: function (box1099) { return ({ box1099: v4_1.edmToTs(box1099, 'Edm.String') }); },
            BoxDescription: function (boxDescription) { return ({ boxDescription: v4_1.edmToTs(boxDescription, 'Edm.String') }); },
            Minimum1099Amount: function (minimum1099Amount) { return ({ minimum1099Amount: v4_1.edmToTs(minimum1099Amount, 'Edm.Double') }); }
        });
    }
    Boxes1099.build = build;
})(Boxes1099 = exports.Boxes1099 || (exports.Boxes1099 = {}));
//# sourceMappingURL=Boxes1099.js.map