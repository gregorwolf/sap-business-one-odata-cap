import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * ItemDepreciationParameter
 */
export interface ItemDepreciationParameter {
    /**
     * Fiscal Year.
     * @nullable
     */
    fiscalYear?: string;
    /**
     * Depreciation Area.
     * @nullable
     */
    depreciationArea?: string;
    /**
     * Depreciation Start Date.
     * @nullable
     */
    depreciationStartDate?: Moment;
    /**
     * Depreciation End Date.
     * @nullable
     */
    depreciationEndDate?: Moment;
    /**
     * Useful Life.
     * @nullable
     */
    usefulLife?: number;
    /**
     * Remaining Life.
     * @nullable
     */
    remainingLife?: number;
    /**
     * Depreciation Type.
     * @nullable
     */
    depreciationType?: string;
    /**
     * Total Units In Useful Life.
     * @nullable
     */
    totalUnitsInUsefulLife?: number;
    /**
     * Remaining Units.
     * @nullable
     */
    remainingUnits?: number;
    /**
     * Standard Units.
     * @nullable
     */
    standardUnits?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[ItemDepreciationParameter.build]] instead.
 */
export declare function createItemDepreciationParameter(json: any): ItemDepreciationParameter;
/**
 * ItemDepreciationParameterField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ItemDepreciationParameterField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ItemDepreciationParameter.fiscalYear]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    fiscalYear: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemDepreciationParameter.depreciationArea]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    depreciationArea: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemDepreciationParameter.depreciationStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    depreciationStartDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[ItemDepreciationParameter.depreciationEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    depreciationEndDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[ItemDepreciationParameter.usefulLife]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    usefulLife: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemDepreciationParameter.remainingLife]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    remainingLife: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemDepreciationParameter.depreciationType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    depreciationType: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemDepreciationParameter.totalUnitsInUsefulLife]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    totalUnitsInUsefulLife: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemDepreciationParameter.remainingUnits]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    remainingUnits: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemDepreciationParameter.standardUnits]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    standardUnits: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace ItemDepreciationParameter {
    function build(json: {
        [keys: string]: FieldType;
    }): ItemDepreciationParameter;
}
//# sourceMappingURL=ItemDepreciationParameter.d.ts.map