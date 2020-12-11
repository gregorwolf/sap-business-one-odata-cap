import { NcmCodesSetupRequestBuilder } from './NcmCodesSetupRequestBuilder';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "NCMCodesSetup" of service "SAPB1".
 */
export declare class NcmCodesSetup extends EntityV4 implements NcmCodesSetupType {
    /**
     * Technical entity name for NcmCodesSetup.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Abs Entry.
     * @nullable
     */
    absEntry?: number;
    /**
     * Ncm Code.
     * @nullable
     */
    ncmCode?: string;
    /**
     * Description.
     * @nullable
     */
    description?: string;
    /**
     * One-to-many navigation property to the [[Items]] entity.
     */
    items: Items[];
    /**
     * One-to-many navigation property to the [[DnfCodeSetup]] entity.
     */
    dnfCodeSetup: DnfCodeSetup[];
    /**
     * Returns an entity builder to construct instances of `NcmCodesSetup`.
     * @returns A builder that constructs instances of entity type `NcmCodesSetup`.
     */
    static builder(): EntityBuilderType<NcmCodesSetup, NcmCodesSetupType>;
    /**
     * Returns a request builder to construct requests for operations on the `NcmCodesSetup` entity type.
     * @returns A `NcmCodesSetup` request builder.
     */
    static requestBuilder(): NcmCodesSetupRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `NcmCodesSetup`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `NcmCodesSetup`.
     */
    static customField(fieldName: string): CustomFieldV4<NcmCodesSetup>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { Items, ItemsType } from './Items';
import { DnfCodeSetup, DnfCodeSetupType } from './DnfCodeSetup';
export interface NcmCodesSetupType {
    absEntry?: number | null;
    ncmCode?: string | null;
    description?: string | null;
    items: ItemsType[];
    dnfCodeSetup: DnfCodeSetupType[];
}
export declare namespace NcmCodesSetup {
    /**
     * Static representation of the [[absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ABS_ENTRY: NumberField<NcmCodesSetup>;
    /**
     * Static representation of the [[ncmCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NCM_CODE: StringField<NcmCodesSetup>;
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<NcmCodesSetup>;
    /**
     * Static representation of the one-to-many navigation property [[items]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEMS: OneToManyLink<NcmCodesSetup, Items>;
    /**
     * Static representation of the one-to-many navigation property [[dnfCodeSetup]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DNF_CODE_SETUP: OneToManyLink<NcmCodesSetup, DnfCodeSetup>;
    /**
     * All fields of the NcmCodesSetup entity.
     */
    const _allFields: Array<NumberField<NcmCodesSetup> | StringField<NcmCodesSetup> | OneToManyLink<NcmCodesSetup, Items> | OneToManyLink<NcmCodesSetup, DnfCodeSetup>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<NcmCodesSetup>;
    /**
     * All key fields of the NcmCodesSetup entity.
     */
    const _keyFields: Array<Field<NcmCodesSetup>>;
    /**
     * Mapping of all key field names to the respective static field property NcmCodesSetup.
     */
    const _keys: {
        [keys: string]: Field<NcmCodesSetup>;
    };
}
//# sourceMappingURL=NcmCodesSetup.d.ts.map