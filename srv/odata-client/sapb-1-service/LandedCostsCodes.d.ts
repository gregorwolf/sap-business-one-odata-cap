import { LandedCostsCodesRequestBuilder } from './LandedCostsCodesRequestBuilder';
import { BoAllocationByEnum } from './BoAllocationByEnum';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, EnumField, Field, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "LandedCostsCodes" of service "SAPB1".
 */
export declare class LandedCostsCodes extends EntityV4 implements LandedCostsCodesType {
    /**
     * Technical entity name for LandedCostsCodes.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Code.
     * @nullable
     */
    code?: string;
    /**
     * Name.
     * @nullable
     */
    name?: string;
    /**
     * Allocation By.
     * @nullable
     */
    allocationBy?: BoAllocationByEnum;
    /**
     * Landed Costs Allocation Account.
     * @nullable
     */
    landedCostsAllocationAccount?: string;
    /**
     * Returns an entity builder to construct instances of `LandedCostsCodes`.
     * @returns A builder that constructs instances of entity type `LandedCostsCodes`.
     */
    static builder(): EntityBuilderType<LandedCostsCodes, LandedCostsCodesType>;
    /**
     * Returns a request builder to construct requests for operations on the `LandedCostsCodes` entity type.
     * @returns A `LandedCostsCodes` request builder.
     */
    static requestBuilder(): LandedCostsCodesRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `LandedCostsCodes`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `LandedCostsCodes`.
     */
    static customField(fieldName: string): CustomFieldV4<LandedCostsCodes>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface LandedCostsCodesType {
    code?: string | null;
    name?: string | null;
    allocationBy?: BoAllocationByEnum | null;
    landedCostsAllocationAccount?: string | null;
}
export declare namespace LandedCostsCodes {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CODE: StringField<LandedCostsCodes>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<LandedCostsCodes>;
    /**
     * Static representation of the [[allocationBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ALLOCATION_BY: EnumField<LandedCostsCodes>;
    /**
     * Static representation of the [[landedCostsAllocationAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LANDED_COSTS_ALLOCATION_ACCOUNT: StringField<LandedCostsCodes>;
    /**
     * All fields of the LandedCostsCodes entity.
     */
    const _allFields: Array<StringField<LandedCostsCodes> | EnumField<LandedCostsCodes>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<LandedCostsCodes>;
    /**
     * All key fields of the LandedCostsCodes entity.
     */
    const _keyFields: Array<Field<LandedCostsCodes>>;
    /**
     * Mapping of all key field names to the respective static field property LandedCostsCodes.
     */
    const _keys: {
        [keys: string]: Field<LandedCostsCodes>;
    };
}
//# sourceMappingURL=LandedCostsCodes.d.ts.map