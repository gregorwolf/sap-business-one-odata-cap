import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * GovPayCodeAuthority
 */
export interface GovPayCodeAuthority {
    /**
     * Abs Id.
     * @nullable
     */
    absId?: number;
    /**
     * Bpl Id.
     * @nullable
     */
    bplId?: number;
    /**
     * State.
     * @nullable
     */
    state?: string;
    /**
     * Card Code.
     * @nullable
     */
    cardCode?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[GovPayCodeAuthority.build]] instead.
 */
export declare function createGovPayCodeAuthority(json: any): GovPayCodeAuthority;
/**
 * GovPayCodeAuthorityField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class GovPayCodeAuthorityField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, GovPayCodeAuthority> {
    /**
     * Representation of the [[GovPayCodeAuthority.absId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[GovPayCodeAuthority.bplId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bplId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[GovPayCodeAuthority.state]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    state: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[GovPayCodeAuthority.cardCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    cardCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of GovPayCodeAuthorityField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace GovPayCodeAuthority {
    /**
     * Metadata information on all properties of the `GovPayCodeAuthority` complex type.
     */
    const _propertyMetadata: PropertyMetadata<GovPayCodeAuthority>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): GovPayCodeAuthority;
}
//# sourceMappingURL=GovPayCodeAuthority.d.ts.map