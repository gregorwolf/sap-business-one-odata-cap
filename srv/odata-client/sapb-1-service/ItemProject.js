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
exports.ItemProject = exports.ItemProjectField = exports.createItemProject = void 0;
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[ItemProject.build]] instead.
 */
function createItemProject(json) {
    return ItemProject.build(json);
}
exports.createItemProject = createItemProject;
/**
 * ItemProjectField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ItemProjectField = /** @class */ (function (_super) {
    __extends(ItemProjectField, _super);
    function ItemProjectField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ItemProject.lineNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNumber = new v4_1.ComplexTypeNumberPropertyField('LineNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemProject.validFrom]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.validFrom = new v4_1.ComplexTypeDatePropertyField('ValidFrom', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ItemProject.validTo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.validTo = new v4_1.ComplexTypeDatePropertyField('ValidTo', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ItemProject.project]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.project = new v4_1.ComplexTypeStringPropertyField('Project', _this, 'Edm.String');
        return _this;
    }
    return ItemProjectField;
}(v4_1.ComplexTypeField));
exports.ItemProjectField = ItemProjectField;
var ItemProject;
(function (ItemProject) {
    function build(json) {
        return v4_1.createComplexType(json, {
            LineNumber: function (lineNumber) { return ({ lineNumber: v4_1.edmToTs(lineNumber, 'Edm.Int32') }); },
            ValidFrom: function (validFrom) { return ({ validFrom: v4_1.edmToTs(validFrom, 'Edm.DateTimeOffset') }); },
            ValidTo: function (validTo) { return ({ validTo: v4_1.edmToTs(validTo, 'Edm.DateTimeOffset') }); },
            Project: function (project) { return ({ project: v4_1.edmToTs(project, 'Edm.String') }); }
        });
    }
    ItemProject.build = build;
})(ItemProject = exports.ItemProject || (exports.ItemProject = {}));
//# sourceMappingURL=ItemProject.js.map