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
exports.DocumentChangeMenuName = exports.DocumentChangeMenuNameField = exports.createDocumentChangeMenuName = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[DocumentChangeMenuName.build]] instead.
 */
function createDocumentChangeMenuName(json) {
    return DocumentChangeMenuName.build(json);
}
exports.createDocumentChangeMenuName = createDocumentChangeMenuName;
/**
 * DocumentChangeMenuNameField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var DocumentChangeMenuNameField = /** @class */ (function (_super) {
    __extends(DocumentChangeMenuNameField, _super);
    function DocumentChangeMenuNameField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[DocumentChangeMenuName.document]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.document = new v4_1.ComplexTypeStringPropertyField('Document', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentChangeMenuName.documentSubType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentSubType = new v4_1.ComplexTypeStringPropertyField('DocumentSubType', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentChangeMenuName.changedMenuName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.changedMenuName = new v4_1.ComplexTypeStringPropertyField('ChangedMenuName', _this, 'Edm.String');
        return _this;
    }
    return DocumentChangeMenuNameField;
}(v4_1.ComplexTypeField));
exports.DocumentChangeMenuNameField = DocumentChangeMenuNameField;
var DocumentChangeMenuName;
(function (DocumentChangeMenuName) {
    function build(json) {
        return v4_1.createComplexType(json, {
            Document: function (document) { return ({ document: v4_1.edmToTs(document, 'Edm.String') }); },
            DocumentSubType: function (documentSubType) { return ({ documentSubType: v4_1.edmToTs(documentSubType, 'Edm.String') }); },
            ChangedMenuName: function (changedMenuName) { return ({ changedMenuName: v4_1.edmToTs(changedMenuName, 'Edm.String') }); }
        });
    }
    DocumentChangeMenuName.build = build;
})(DocumentChangeMenuName = exports.DocumentChangeMenuName || (exports.DocumentChangeMenuName = {}));
//# sourceMappingURL=DocumentChangeMenuName.js.map