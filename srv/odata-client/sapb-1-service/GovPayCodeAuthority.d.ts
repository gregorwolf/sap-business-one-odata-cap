import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
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
export declare class GovPayCodeAuthorityField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}
export declare namespace GovPayCodeAuthority {
    function build(json: {
        [keys: string]: FieldType;
    }): GovPayCodeAuthority;
}
//# sourceMappingURL=GovPayCodeAuthority.d.ts.map