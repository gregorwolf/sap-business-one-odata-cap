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
exports.PathAdmin = exports.PathAdminField = exports.createPathAdmin = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[PathAdmin.build]] instead.
 */
function createPathAdmin(json) {
    return PathAdmin.build(json);
}
exports.createPathAdmin = createPathAdmin;
/**
 * PathAdminField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var PathAdminField = /** @class */ (function (_super) {
    __extends(PathAdminField, _super);
    function PathAdminField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[PathAdmin.wordTemplateFolderPath]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.wordTemplateFolderPath = new v4_1.ComplexTypeStringPropertyField('WordTemplateFolderPath', _this, 'Edm.String');
        /**
         * Representation of the [[PathAdmin.picturesFolderPath]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.picturesFolderPath = new v4_1.ComplexTypeStringPropertyField('PicturesFolderPath', _this, 'Edm.String');
        /**
         * Representation of the [[PathAdmin.attachmentsFolderPath]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attachmentsFolderPath = new v4_1.ComplexTypeStringPropertyField('AttachmentsFolderPath', _this, 'Edm.String');
        /**
         * Representation of the [[PathAdmin.extensionsFolderPath]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.extensionsFolderPath = new v4_1.ComplexTypeStringPropertyField('ExtensionsFolderPath', _this, 'Edm.String');
        /**
         * Representation of the [[PathAdmin.printId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.printId = new v4_1.ComplexTypeStringPropertyField('PrintId', _this, 'Edm.String');
        return _this;
    }
    return PathAdminField;
}(v4_1.ComplexTypeField));
exports.PathAdminField = PathAdminField;
var PathAdmin;
(function (PathAdmin) {
    function build(json) {
        return v4_1.createComplexType(json, {
            WordTemplateFolderPath: function (wordTemplateFolderPath) { return ({ wordTemplateFolderPath: v4_1.edmToTs(wordTemplateFolderPath, 'Edm.String') }); },
            PicturesFolderPath: function (picturesFolderPath) { return ({ picturesFolderPath: v4_1.edmToTs(picturesFolderPath, 'Edm.String') }); },
            AttachmentsFolderPath: function (attachmentsFolderPath) { return ({ attachmentsFolderPath: v4_1.edmToTs(attachmentsFolderPath, 'Edm.String') }); },
            ExtensionsFolderPath: function (extensionsFolderPath) { return ({ extensionsFolderPath: v4_1.edmToTs(extensionsFolderPath, 'Edm.String') }); },
            PrintId: function (printId) { return ({ printId: v4_1.edmToTs(printId, 'Edm.String') }); }
        });
    }
    PathAdmin.build = build;
})(PathAdmin = exports.PathAdmin || (exports.PathAdmin = {}));
//# sourceMappingURL=PathAdmin.js.map