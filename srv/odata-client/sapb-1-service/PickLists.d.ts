import { PickListsRequestBuilder } from './PickListsRequestBuilder';
import { Moment } from 'moment';
import { PickListsLine } from './PickListsLine';
import { BoPickStatus } from './BoPickStatus';
import { BoYesNoEnum } from './BoYesNoEnum';
import { AllFields, CollectionField, CustomFieldV4, DateField, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToOneLink, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "PickLists" of service "SAPB1".
 */
export declare class PickLists extends EntityV4 implements PickListsType {
    /**
     * Technical entity name for PickLists.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Absoluteentry.
     * @nullable
     */
    absoluteentry?: number;
    /**
     * Name.
     * @nullable
     */
    name?: string;
    /**
     * Owner Code.
     * @nullable
     */
    ownerCode?: number;
    /**
     * Owner Name.
     * @nullable
     */
    ownerName?: string;
    /**
     * Pick Date.
     * @nullable
     */
    pickDate?: Moment;
    /**
     * Remarks.
     * @nullable
     */
    remarks?: string;
    /**
     * Status.
     * @nullable
     */
    status?: BoPickStatus;
    /**
     * Object Type.
     * @nullable
     */
    objectType?: string;
    /**
     * Use Base Units.
     * @nullable
     */
    useBaseUnits?: BoYesNoEnum;
    /**
     * Pick Lists Lines.
     * @nullable
     */
    pickListsLines?: PickListsLine[];
    /**
     * One-to-one navigation property to the [[Users]] entity.
     */
    user: Users;
    /**
     * Returns an entity builder to construct instances of `PickLists`.
     * @returns A builder that constructs instances of entity type `PickLists`.
     */
    static builder(): EntityBuilderType<PickLists, PickListsType>;
    /**
     * Returns a request builder to construct requests for operations on the `PickLists` entity type.
     * @returns A `PickLists` request builder.
     */
    static requestBuilder(): PickListsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PickLists`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PickLists`.
     */
    static customField(fieldName: string): CustomFieldV4<PickLists>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { Users, UsersType } from './Users';
export interface PickListsType {
    absoluteentry?: number | null;
    name?: string | null;
    ownerCode?: number | null;
    ownerName?: string | null;
    pickDate?: Moment | null;
    remarks?: string | null;
    status?: BoPickStatus | null;
    objectType?: string | null;
    useBaseUnits?: BoYesNoEnum | null;
    pickListsLines?: PickListsLine[] | null;
    user: UsersType;
}
export declare namespace PickLists {
    /**
     * Static representation of the [[absoluteentry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ABSOLUTEENTRY: NumberField<PickLists>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<PickLists>;
    /**
     * Static representation of the [[ownerCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OWNER_CODE: NumberField<PickLists>;
    /**
     * Static representation of the [[ownerName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OWNER_NAME: StringField<PickLists>;
    /**
     * Static representation of the [[pickDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PICK_DATE: DateField<PickLists>;
    /**
     * Static representation of the [[remarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REMARKS: StringField<PickLists>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: EnumField<PickLists>;
    /**
     * Static representation of the [[objectType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OBJECT_TYPE: StringField<PickLists>;
    /**
     * Static representation of the [[useBaseUnits]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USE_BASE_UNITS: EnumField<PickLists>;
    /**
     * Static representation of the [[pickListsLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PICK_LISTS_LINES: CollectionField<PickLists, PickListsLine>;
    /**
     * Static representation of the one-to-one navigation property [[user]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER: OneToOneLink<PickLists, Users>;
    /**
     * All fields of the PickLists entity.
     */
    const _allFields: Array<NumberField<PickLists> | StringField<PickLists> | DateField<PickLists> | EnumField<PickLists> | CollectionField<PickLists, PickListsLine> | OneToOneLink<PickLists, Users>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<PickLists>;
    /**
     * All key fields of the PickLists entity.
     */
    const _keyFields: Array<Field<PickLists>>;
    /**
     * Mapping of all key field names to the respective static field property PickLists.
     */
    const _keys: {
        [keys: string]: Field<PickLists>;
    };
}
//# sourceMappingURL=PickLists.d.ts.map