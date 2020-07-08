import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * DnfCodeSetupParams
 */
export interface DnfCodeSetupParams {
    /**
     * Abs Entry.
     * @nullable
     */
    absEntry?: number;
    /**
     * Ncm Code.
     * @nullable
     */
    ncmCode?: number;
    /**
     * Dnf Code.
     * @nullable
     */
    dnfCode?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[DnfCodeSetupParams.build]] instead.
 */
export declare function createDnfCodeSetupParams(json: any): DnfCodeSetupParams;
/**
 * DnfCodeSetupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class DnfCodeSetupParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[DnfCodeSetupParams.absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DnfCodeSetupParams.ncmCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    ncmCode: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DnfCodeSetupParams.dnfCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    dnfCode: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace DnfCodeSetupParams {
    function build(json: {
        [keys: string]: FieldType;
    }): DnfCodeSetupParams;
}
//# sourceMappingURL=DnfCodeSetupParams.d.ts.map