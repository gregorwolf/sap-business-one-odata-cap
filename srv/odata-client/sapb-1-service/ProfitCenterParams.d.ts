import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * ProfitCenterParams
 */
export interface ProfitCenterParams {
    /**
     * Center Code.
     * @nullable
     */
    centerCode?: string;
    /**
     * Center Name.
     * @nullable
     */
    centerName?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[ProfitCenterParams.build]] instead.
 */
export declare function createProfitCenterParams(json: any): ProfitCenterParams;
/**
 * ProfitCenterParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ProfitCenterParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ProfitCenterParams.centerCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    centerCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ProfitCenterParams.centerName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    centerName: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace ProfitCenterParams {
    function build(json: {
        [keys: string]: FieldType;
    }): ProfitCenterParams;
}
//# sourceMappingURL=ProfitCenterParams.d.ts.map