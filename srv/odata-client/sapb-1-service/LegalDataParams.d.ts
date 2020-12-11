import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * LegalDataParams
 */
export interface LegalDataParams {
    /**
     * Doc Entry.
     * @nullable
     */
    docEntry?: number;
    /**
     * Source Object Type.
     * @nullable
     */
    sourceObjectType?: string;
    /**
     * Source Object Entry.
     * @nullable
     */
    sourceObjectEntry?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[LegalDataParams.build]] instead.
 */
export declare function createLegalDataParams(json: any): LegalDataParams;
/**
 * LegalDataParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class LegalDataParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, LegalDataParams> {
    /**
     * Representation of the [[LegalDataParams.docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    docEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[LegalDataParams.sourceObjectType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sourceObjectType: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[LegalDataParams.sourceObjectEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sourceObjectEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of LegalDataParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace LegalDataParams {
    /**
     * Metadata information on all properties of the `LegalDataParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<LegalDataParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): LegalDataParams;
}
//# sourceMappingURL=LegalDataParams.d.ts.map