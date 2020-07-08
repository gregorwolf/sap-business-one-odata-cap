import { Attachments2RequestBuilder } from './Attachments2RequestBuilder';
import { Attachments2Line } from './Attachments2Line';
import { AllFields, CollectionField, CustomField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "Attachments2" of service "SAPB1".
 */
export declare class Attachments2 extends Entity implements Attachments2Type {
    /**
     * Technical entity name for Attachments2.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Attachments2.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Absolute Entry.
     * @nullable
     */
    absoluteEntry?: number;
    /**
     * Attachments 2 Lines.
     * @nullable
     */
    attachments2Lines?: Attachments2Line[];
    /**
     * One-to-many navigation property to the [[ServiceContracts]] entity.
     */
    serviceContracts: ServiceContracts[];
    /**
     * One-to-many navigation property to the [[Campaigns]] entity.
     */
    campaigns: Campaigns[];
    /**
     * One-to-many navigation property to the [[BlanketAgreements]] entity.
     */
    blanketAgreements: BlanketAgreements[];
    /**
     * One-to-many navigation property to the [[CustomerEquipmentCards]] entity.
     */
    customerEquipmentCards: CustomerEquipmentCards[];
    /**
     * One-to-many navigation property to the [[ProjectManagements]] entity.
     */
    projectManagements: ProjectManagements[];
    /**
     * Returns an entity builder to construct instances `Attachments2`.
     * @returns A builder that constructs instances of entity type `Attachments2`.
     */
    static builder(): EntityBuilderType<Attachments2, Attachments2TypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `Attachments2` entity type.
     * @returns A `Attachments2` request builder.
     */
    static requestBuilder(): Attachments2RequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Attachments2`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Attachments2`.
     */
    static customField(fieldName: string): CustomField<Attachments2>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { ServiceContracts, ServiceContractsType } from './ServiceContracts';
import { Campaigns, CampaignsType } from './Campaigns';
import { BlanketAgreements, BlanketAgreementsType } from './BlanketAgreements';
import { CustomerEquipmentCards, CustomerEquipmentCardsType } from './CustomerEquipmentCards';
import { ProjectManagements, ProjectManagementsType } from './ProjectManagements';
export interface Attachments2Type {
    absoluteEntry?: number;
    attachments2Lines?: Attachments2Line[];
    serviceContracts: ServiceContractsType[];
    campaigns: CampaignsType[];
    blanketAgreements: BlanketAgreementsType[];
    customerEquipmentCards: CustomerEquipmentCardsType[];
    projectManagements: ProjectManagementsType[];
}
export interface Attachments2TypeForceMandatory {
    absoluteEntry: number;
    attachments2Lines: Attachments2Line[];
    serviceContracts: ServiceContractsType[];
    campaigns: CampaignsType[];
    blanketAgreements: BlanketAgreementsType[];
    customerEquipmentCards: CustomerEquipmentCardsType[];
    projectManagements: ProjectManagementsType[];
}
export declare namespace Attachments2 {
    /**
     * Static representation of the [[absoluteEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ABSOLUTE_ENTRY: NumberField<Attachments2>;
    /**
     * Static representation of the [[attachments2Lines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ATTACHMENTS_2_LINES: CollectionField<Attachments2>;
    /**
     * Static representation of the one-to-many navigation property [[serviceContracts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SERVICE_CONTRACTS: OneToManyLink<Attachments2, ServiceContracts>;
    /**
     * Static representation of the one-to-many navigation property [[campaigns]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CAMPAIGNS: OneToManyLink<Attachments2, Campaigns>;
    /**
     * Static representation of the one-to-many navigation property [[blanketAgreements]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BLANKET_AGREEMENTS: OneToManyLink<Attachments2, BlanketAgreements>;
    /**
     * Static representation of the one-to-many navigation property [[customerEquipmentCards]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER_EQUIPMENT_CARDS: OneToManyLink<Attachments2, CustomerEquipmentCards>;
    /**
     * Static representation of the one-to-many navigation property [[projectManagements]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROJECT_MANAGEMENTS: OneToManyLink<Attachments2, ProjectManagements>;
    /**
     * All fields of the Attachments2 entity.
     */
    const _allFields: Array<NumberField<Attachments2> | CollectionField<Attachments2> | OneToManyLink<Attachments2, ServiceContracts> | OneToManyLink<Attachments2, Campaigns> | OneToManyLink<Attachments2, BlanketAgreements> | OneToManyLink<Attachments2, CustomerEquipmentCards> | OneToManyLink<Attachments2, ProjectManagements>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Attachments2>;
    /**
     * All key fields of the Attachments2 entity.
     */
    const _keyFields: Array<Field<Attachments2>>;
    /**
     * Mapping of all key field names to the respective static field property Attachments2.
     */
    const _keys: {
        [keys: string]: Field<Attachments2>;
    };
}
//# sourceMappingURL=Attachments2.d.ts.map