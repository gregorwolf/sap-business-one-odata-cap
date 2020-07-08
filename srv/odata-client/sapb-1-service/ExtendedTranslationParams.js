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
exports.ExtendedTranslationParams = exports.ExtendedTranslationParamsField = exports.createExtendedTranslationParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[ExtendedTranslationParams.build]] instead.
 */
function createExtendedTranslationParams(json) {
    return ExtendedTranslationParams.build(json);
}
exports.createExtendedTranslationParams = createExtendedTranslationParams;
/**
 * ExtendedTranslationParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ExtendedTranslationParamsField = /** @class */ (function (_super) {
    __extends(ExtendedTranslationParamsField, _super);
    function ExtendedTranslationParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ExtendedTranslationParams.docEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docEntry = new v4_1.ComplexTypeNumberPropertyField('DocEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[ExtendedTranslationParams.id]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.id = new v4_1.ComplexTypeStringPropertyField('ID', _this, 'Edm.String');
        /**
         * Representation of the [[ExtendedTranslationParams.secondaryId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.secondaryId = new v4_1.ComplexTypeStringPropertyField('SecondaryID', _this, 'Edm.String');
        return _this;
    }
    return ExtendedTranslationParamsField;
}(v4_1.ComplexTypeField));
exports.ExtendedTranslationParamsField = ExtendedTranslationParamsField;
var ExtendedTranslationParams;
(function (ExtendedTranslationParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            DocEntry: function (docEntry) { return ({ docEntry: v4_1.edmToTs(docEntry, 'Edm.Int32') }); },
            ID: function (id) { return ({ id: v4_1.edmToTs(id, 'Edm.String') }); },
            SecondaryID: function (secondaryId) { return ({ secondaryId: v4_1.edmToTs(secondaryId, 'Edm.String') }); }
        });
    }
    ExtendedTranslationParams.build = build;
})(ExtendedTranslationParams = exports.ExtendedTranslationParams || (exports.ExtendedTranslationParams = {}));
//# sourceMappingURL=ExtendedTranslationParams.js.map