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
exports.PathAdmin = exports.PathAdminField = exports.createPathAdmin = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
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
    /**
     * Creates an instance of PathAdminField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function PathAdminField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, PathAdmin) || this;
        /**
         * Representation of the [[PathAdmin.wordTemplateFolderPath]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.wordTemplateFolderPath = new core_1.ComplexTypeStringPropertyField('WordTemplateFolderPath', _this, 'Edm.String');
        /**
         * Representation of the [[PathAdmin.picturesFolderPath]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.picturesFolderPath = new core_1.ComplexTypeStringPropertyField('PicturesFolderPath', _this, 'Edm.String');
        /**
         * Representation of the [[PathAdmin.attachmentsFolderPath]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attachmentsFolderPath = new core_1.ComplexTypeStringPropertyField('AttachmentsFolderPath', _this, 'Edm.String');
        /**
         * Representation of the [[PathAdmin.extensionsFolderPath]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.extensionsFolderPath = new core_1.ComplexTypeStringPropertyField('ExtensionsFolderPath', _this, 'Edm.String');
        /**
         * Representation of the [[PathAdmin.printId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.printId = new core_1.ComplexTypeStringPropertyField('PrintId', _this, 'Edm.String');
        return _this;
    }
    return PathAdminField;
}(core_1.ComplexTypeField));
exports.PathAdminField = PathAdminField;
var PathAdmin;
(function (PathAdmin) {
    /**
     * Metadata information on all properties of the `PathAdmin` complex type.
     */
    PathAdmin._propertyMetadata = [{
            originalName: 'WordTemplateFolderPath',
            name: 'wordTemplateFolderPath',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'PicturesFolderPath',
            name: 'picturesFolderPath',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'AttachmentsFolderPath',
            name: 'attachmentsFolderPath',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ExtensionsFolderPath',
            name: 'extensionsFolderPath',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'PrintId',
            name: 'printId',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, PathAdmin);
    }
    PathAdmin.build = build;
})(PathAdmin = exports.PathAdmin || (exports.PathAdmin = {}));
//# sourceMappingURL=PathAdmin.js.map