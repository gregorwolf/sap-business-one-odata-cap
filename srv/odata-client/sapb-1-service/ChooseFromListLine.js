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
exports.ChooseFromListLine = exports.ChooseFromListLineField = exports.createChooseFromListLine = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[ChooseFromListLine.build]] instead.
 */
function createChooseFromListLine(json) {
    return ChooseFromListLine.build(json);
}
exports.createChooseFromListLine = createChooseFromListLine;
/**
 * ChooseFromListLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ChooseFromListLineField = /** @class */ (function (_super) {
    __extends(ChooseFromListLineField, _super);
    function ChooseFromListLineField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ChooseFromListLine.fieldNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.fieldNo = new v4_1.ComplexTypeStringPropertyField('FieldNo', _this, 'Edm.String');
        /**
         * Representation of the [[ChooseFromListLine.displayedName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.displayedName = new v4_1.ComplexTypeStringPropertyField('DisplayedName', _this, 'Edm.String');
        /**
         * Representation of the [[ChooseFromListLine.visualIndex]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.visualIndex = new v4_1.ComplexTypeNumberPropertyField('VisualIndex', _this, 'Edm.Int32');
        return _this;
    }
    return ChooseFromListLineField;
}(v4_1.ComplexTypeField));
exports.ChooseFromListLineField = ChooseFromListLineField;
var ChooseFromListLine;
(function (ChooseFromListLine) {
    function build(json) {
        return v4_1.createComplexType(json, {
            FieldNo: function (fieldNo) { return ({ fieldNo: v4_1.edmToTs(fieldNo, 'Edm.String') }); },
            DisplayedName: function (displayedName) { return ({ displayedName: v4_1.edmToTs(displayedName, 'Edm.String') }); },
            VisualIndex: function (visualIndex) { return ({ visualIndex: v4_1.edmToTs(visualIndex, 'Edm.Int32') }); }
        });
    }
    ChooseFromListLine.build = build;
})(ChooseFromListLine = exports.ChooseFromListLine || (exports.ChooseFromListLine = {}));
//# sourceMappingURL=ChooseFromListLine.js.map