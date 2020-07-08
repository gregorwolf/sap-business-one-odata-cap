/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Attachments2RequestBuilder } from './Attachments2RequestBuilder';
import { Attachments2Line, Attachments2LineField } from './Attachments2Line';
import { AllFields, CollectionField, CustomField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "Attachments2" of service "SAPB1".
 */
export class Attachments2 extends Entity implements Attachments2Type {
  /**
   * Technical entity name for Attachments2.
   */
  static _entityName = 'Attachments2';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for Attachments2.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
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
  serviceContracts!: ServiceContracts[];
  /**
   * One-to-many navigation property to the [[Campaigns]] entity.
   */
  campaigns!: Campaigns[];
  /**
   * One-to-many navigation property to the [[BlanketAgreements]] entity.
   */
  blanketAgreements!: BlanketAgreements[];
  /**
   * One-to-many navigation property to the [[CustomerEquipmentCards]] entity.
   */
  customerEquipmentCards!: CustomerEquipmentCards[];
  /**
   * One-to-many navigation property to the [[ProjectManagements]] entity.
   */
  projectManagements!: ProjectManagements[];

  /**
   * Returns an entity builder to construct instances `Attachments2`.
   * @returns A builder that constructs instances of entity type `Attachments2`.
   */
  static builder(): EntityBuilderType<Attachments2, Attachments2TypeForceMandatory> {
    return Entity.entityBuilder(Attachments2);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Attachments2` entity type.
   * @returns A `Attachments2` request builder.
   */
  static requestBuilder(): Attachments2RequestBuilder {
    return new Attachments2RequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Attachments2`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Attachments2`.
   */
  static customField(fieldName: string): CustomField<Attachments2> {
    return Entity.customFieldSelector(fieldName, Attachments2);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
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

export namespace Attachments2 {
  /**
   * Static representation of the [[absoluteEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ABSOLUTE_ENTRY: NumberField<Attachments2> = new NumberField('AbsoluteEntry', Attachments2, 'Edm.Int32');
  /**
   * Static representation of the [[attachments2Lines]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ATTACHMENTS_2_LINES: CollectionField<Attachments2> = new CollectionField('Attachments2_Lines', Attachments2, new Attachments2LineField('', Attachments2));
  /**
   * Static representation of the one-to-many navigation property [[serviceContracts]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERVICE_CONTRACTS: OneToManyLink<Attachments2, ServiceContracts> = new OneToManyLink('ServiceContracts', Attachments2, ServiceContracts);
  /**
   * Static representation of the one-to-many navigation property [[campaigns]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CAMPAIGNS: OneToManyLink<Attachments2, Campaigns> = new OneToManyLink('Campaigns', Attachments2, Campaigns);
  /**
   * Static representation of the one-to-many navigation property [[blanketAgreements]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BLANKET_AGREEMENTS: OneToManyLink<Attachments2, BlanketAgreements> = new OneToManyLink('BlanketAgreements', Attachments2, BlanketAgreements);
  /**
   * Static representation of the one-to-many navigation property [[customerEquipmentCards]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER_EQUIPMENT_CARDS: OneToManyLink<Attachments2, CustomerEquipmentCards> = new OneToManyLink('CustomerEquipmentCards', Attachments2, CustomerEquipmentCards);
  /**
   * Static representation of the one-to-many navigation property [[projectManagements]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROJECT_MANAGEMENTS: OneToManyLink<Attachments2, ProjectManagements> = new OneToManyLink('ProjectManagements', Attachments2, ProjectManagements);
  /**
   * All fields of the Attachments2 entity.
   */
  export const _allFields: Array<NumberField<Attachments2> | CollectionField<Attachments2> | OneToManyLink<Attachments2, ServiceContracts> | OneToManyLink<Attachments2, Campaigns> | OneToManyLink<Attachments2, BlanketAgreements> | OneToManyLink<Attachments2, CustomerEquipmentCards> | OneToManyLink<Attachments2, ProjectManagements>> = [
    Attachments2.ABSOLUTE_ENTRY,
    Attachments2.ATTACHMENTS_2_LINES,
    Attachments2.SERVICE_CONTRACTS,
    Attachments2.CAMPAIGNS,
    Attachments2.BLANKET_AGREEMENTS,
    Attachments2.CUSTOMER_EQUIPMENT_CARDS,
    Attachments2.PROJECT_MANAGEMENTS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Attachments2> = new AllFields('*', Attachments2);
  /**
   * All key fields of the Attachments2 entity.
   */
  export const _keyFields: Array<Field<Attachments2>> = [Attachments2.ABSOLUTE_ENTRY];
  /**
   * Mapping of all key field names to the respective static field property Attachments2.
   */
  export const _keys: { [keys: string]: Field<Attachments2> } = Attachments2._keyFields.reduce((acc: { [keys: string]: Field<Attachments2> }, field: Field<Attachments2>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
