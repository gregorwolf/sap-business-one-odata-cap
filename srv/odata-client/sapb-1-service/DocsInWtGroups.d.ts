import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * DocsInWtGroups
 */
export interface DocsInWtGroups {
    /**
     * Doc Entry.
     * @nullable
     */
    docEntry?: number;
    /**
     * Doc Obj Type.
     * @nullable
     */
    docObjType?: string;
    /**
     * Vat Amount.
     * @nullable
     */
    vatAmount?: number;
    /**
     * Doc Total.
     * @nullable
     */
    docTotal?: number;
    /**
     * Base Amount.
     * @nullable
     */
    baseAmount?: number;
    /**
     * Accum Amount.
     * @nullable
     */
    accumAmount?: number;
    /**
     * Percept Amount.
     * @nullable
     */
    perceptAmount?: number;
    /**
     * Percent.
     * @nullable
     */
    percent?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[DocsInWtGroups.build]] instead.
 */
export declare function createDocsInWtGroups(json: any): DocsInWtGroups;
/**
 * DocsInWtGroupsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class DocsInWtGroupsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, DocsInWtGroups> {
    /**
     * Representation of the [[DocsInWtGroups.docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    docEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocsInWtGroups.docObjType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    docObjType: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DocsInWtGroups.vatAmount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    vatAmount: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocsInWtGroups.docTotal]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    docTotal: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocsInWtGroups.baseAmount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    baseAmount: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocsInWtGroups.accumAmount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    accumAmount: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocsInWtGroups.perceptAmount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    perceptAmount: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocsInWtGroups.percent]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    percent: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of DocsInWtGroupsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace DocsInWtGroups {
    /**
     * Metadata information on all properties of the `DocsInWtGroups` complex type.
     */
    const _propertyMetadata: PropertyMetadata<DocsInWtGroups>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): DocsInWtGroups;
}
//# sourceMappingURL=DocsInWtGroups.d.ts.map