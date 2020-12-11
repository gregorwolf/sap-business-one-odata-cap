import { BoYesNoEnum } from './BoYesNoEnum';
import { SortOrderEnum } from './SortOrderEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * ChooseFromListLine
 */
export interface ChooseFromListLine {
    /**
     * Field No.
     * @nullable
     */
    fieldNo?: string;
    /**
     * Displayed Name.
     * @nullable
     */
    displayedName?: string;
    /**
     * Group By.
     * @nullable
     */
    groupBy?: BoYesNoEnum;
    /**
     * Visible.
     * @nullable
     */
    visible?: BoYesNoEnum;
    /**
     * Show Type.
     * @nullable
     */
    showType?: BoYesNoEnum;
    /**
     * Sort Order.
     * @nullable
     */
    sortOrder?: SortOrderEnum;
    /**
     * Visual Index.
     * @nullable
     */
    visualIndex?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[ChooseFromListLine.build]] instead.
 */
export declare function createChooseFromListLine(json: any): ChooseFromListLine;
/**
 * ChooseFromListLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ChooseFromListLineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ChooseFromListLine> {
    /**
     * Representation of the [[ChooseFromListLine.fieldNo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    fieldNo: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ChooseFromListLine.displayedName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    displayedName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ChooseFromListLine.groupBy]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    groupBy: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[ChooseFromListLine.visible]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    visible: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[ChooseFromListLine.showType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    showType: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[ChooseFromListLine.sortOrder]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sortOrder: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[ChooseFromListLine.visualIndex]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    visualIndex: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of ChooseFromListLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ChooseFromListLine {
    /**
     * Metadata information on all properties of the `ChooseFromListLine` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ChooseFromListLine>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): ChooseFromListLine;
}
//# sourceMappingURL=ChooseFromListLine.d.ts.map