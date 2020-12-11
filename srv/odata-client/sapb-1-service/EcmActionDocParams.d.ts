import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * EcmActionDocParams
 */
export interface EcmActionDocParams {
    /**
     * Protocol.
     * @nullable
     */
    protocol?: string;
    /**
     * Source Type.
     * @nullable
     */
    sourceType?: string;
    /**
     * Source Object.
     * @nullable
     */
    sourceObject?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[EcmActionDocParams.build]] instead.
 */
export declare function createEcmActionDocParams(json: any): EcmActionDocParams;
/**
 * EcmActionDocParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class EcmActionDocParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, EcmActionDocParams> {
    /**
     * Representation of the [[EcmActionDocParams.protocol]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    protocol: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[EcmActionDocParams.sourceType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sourceType: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[EcmActionDocParams.sourceObject]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sourceObject: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of EcmActionDocParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace EcmActionDocParams {
    /**
     * Metadata information on all properties of the `EcmActionDocParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<EcmActionDocParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): EcmActionDocParams;
}
//# sourceMappingURL=EcmActionDocParams.d.ts.map