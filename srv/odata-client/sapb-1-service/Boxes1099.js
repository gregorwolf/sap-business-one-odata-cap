"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
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
var core_1 = require("@sap-cloud-sdk/core");
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
    /**
     * Creates an instance of Boxes1099Field.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function Boxes1099Field(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, Boxes1099) || this;
        /**
         * Representation of the [[Boxes1099.formCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.formCode = new core_1.ComplexTypeNumberPropertyField('FormCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[Boxes1099.box1099]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.box1099 = new core_1.ComplexTypeStringPropertyField('Box1099', _this, 'Edm.String');
        /**
         * Representation of the [[Boxes1099.boxDescription]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.boxDescription = new core_1.ComplexTypeStringPropertyField('BoxDescription', _this, 'Edm.String');
        /**
         * Representation of the [[Boxes1099.minimum1099Amount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.minimum1099Amount = new core_1.ComplexTypeNumberPropertyField('Minimum1099Amount', _this, 'Edm.Double');
        return _this;
    }
    return Boxes1099Field;
}(core_1.ComplexTypeField));
exports.Boxes1099Field = Boxes1099Field;
var Boxes1099;
(function (Boxes1099) {
    /**
     * Metadata information on all properties of the `Boxes1099` complex type.
     */
    Boxes1099._propertyMetadata = [{
            originalName: 'FormCode',
            name: 'formCode',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Box1099',
            name: 'box1099',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'BoxDescription',
            name: 'boxDescription',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Minimum1099Amount',
            name: 'minimum1099Amount',
            type: 'Edm.Double',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, Boxes1099);
    }
    Boxes1099.build = build;
})(Boxes1099 = exports.Boxes1099 || (exports.Boxes1099 = {}));
//# sourceMappingURL=Boxes1099.js.map