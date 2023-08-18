/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import { CustomerEquipmentCardBusinessPartner } from './CustomerEquipmentCardBusinessPartner';
import type { CustomerEquipmentCardsApi } from './CustomerEquipmentCardsApi';
import { BoResolutionUnits } from './BoResolutionUnits';
import { BoSerialNumberStatus } from './BoSerialNumberStatus';
import { BoEquipmentBpType } from './BoEquipmentBpType';
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
import { Items, ItemsType } from './Items';
import { Countries, CountriesType } from './Countries';
import { ServiceContracts, ServiceContractsType } from './ServiceContracts';
import { EmployeesInfo, EmployeesInfoType } from './EmployeesInfo';
import { Territories, TerritoriesType } from './Territories';
import { Attachments2, Attachments2Type } from './Attachments2';

/**
 * This class represents the entity "CustomerEquipmentCards" of service "SAPB1".
 */
export class CustomerEquipmentCards<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CustomerEquipmentCardsType<T>
{
  /**
   * Technical entity name for CustomerEquipmentCards.
   */
  static _entityName = 'CustomerEquipmentCards';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the CustomerEquipmentCards entity
   */
  static _keys = ['EquipmentCardNum'];
  /**
   * Equipment Card Num.
   */
  equipmentCardNum!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Customer Code.
   * @nullable
   */
  customerCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Name.
   * @nullable
   */
  customerName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contact Employee Code.
   * @nullable
   */
  contactEmployeeCode?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Direct Customer Code.
   * @nullable
   */
  directCustomerCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Direct Customer Name.
   * @nullable
   */
  directCustomerName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Manufacturer Serial Num.
   * @nullable
   */
  manufacturerSerialNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Internal Serial Num.
   * @nullable
   */
  internalSerialNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Required Resolution Time.
   * @nullable
   */
  requiredResolutionTime?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Required Resolution Unit.
   * @nullable
   */
  requiredResolutionUnit?: BoResolutionUnits | null;
  /**
   * Item Code.
   * @nullable
   */
  itemCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Description.
   * @nullable
   */
  itemDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Code.
   * @nullable
   */
  invoiceCode?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Invoice Number.
   * @nullable
   */
  invoiceNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Delivery Date.
   * @nullable
   */
  deliveryDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Contact Phone.
   * @nullable
   */
  contactPhone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Street.
   * @nullable
   */
  street?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Block.
   * @nullable
   */
  block?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Zip Code.
   * @nullable
   */
  zipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * City.
   * @nullable
   */
  city?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * County.
   * @nullable
   */
  county?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Country Code.
   * @nullable
   */
  countryCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * State Code.
   * @nullable
   */
  stateCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Install Location.
   * @nullable
   */
  installLocation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contract Code.
   * @nullable
   */
  contractCode?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Contract Start Date.
   * @nullable
   */
  contractStartDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Contract End Date.
   * @nullable
   */
  contractEndDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Delivery Code.
   * @nullable
   */
  deliveryCode?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Delivery Number.
   * @nullable
   */
  deliveryNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Status Of Serial Number.
   * @nullable
   */
  statusOfSerialNumber?: BoSerialNumberStatus | null;
  /**
   * Replace Sn.
   * @nullable
   */
  replaceSn?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Default Technician.
   * @nullable
   */
  defaultTechnician?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Replaced By Sn.
   * @nullable
   */
  replacedBySn?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Defaultterritory.
   * @nullable
   */
  defaultterritory?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Building Floor Room.
   * @nullable
   */
  buildingFloorRoom?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Attachment Entry.
   * @nullable
   */
  attachmentEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Street No.
   * @nullable
   */
  streetNo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service Bp Type.
   * @nullable
   */
  serviceBpType?: BoEquipmentBpType | null;
  /**
   * Customer Equipment Card Business Partners.
   * @nullable
   */
  customerEquipmentCardBusinessPartners?:
    | CustomerEquipmentCardBusinessPartner<T>[]
    | null;
  /**
   * One-to-one navigation property to the {@link BusinessPartners} entity.
   */
  businessPartner?: BusinessPartners<T> | null;
  /**
   * One-to-one navigation property to the {@link Items} entity.
   */
  item?: Items<T> | null;
  /**
   * One-to-one navigation property to the {@link Countries} entity.
   */
  country?: Countries<T> | null;
  /**
   * One-to-one navigation property to the {@link ServiceContracts} entity.
   */
  serviceContract?: ServiceContracts<T> | null;
  /**
   * One-to-one navigation property to the {@link EmployeesInfo} entity.
   */
  employeeInfo?: EmployeesInfo<T> | null;
  /**
   * One-to-one navigation property to the {@link Territories} entity.
   */
  territory?: Territories<T> | null;
  /**
   * One-to-one navigation property to the {@link Attachments2} entity.
   */
  attachments2?: Attachments2<T> | null;

  constructor(readonly _entityApi: CustomerEquipmentCardsApi<T>) {
    super(_entityApi);
  }
}

export interface CustomerEquipmentCardsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  equipmentCardNum: DeserializedType<T, 'Edm.Int32'>;
  customerCode?: DeserializedType<T, 'Edm.String'> | null;
  customerName?: DeserializedType<T, 'Edm.String'> | null;
  contactEmployeeCode?: DeserializedType<T, 'Edm.Int32'> | null;
  directCustomerCode?: DeserializedType<T, 'Edm.String'> | null;
  directCustomerName?: DeserializedType<T, 'Edm.String'> | null;
  manufacturerSerialNum?: DeserializedType<T, 'Edm.String'> | null;
  internalSerialNum?: DeserializedType<T, 'Edm.String'> | null;
  requiredResolutionTime?: DeserializedType<T, 'Edm.Int32'> | null;
  requiredResolutionUnit?: BoResolutionUnits | null;
  itemCode?: DeserializedType<T, 'Edm.String'> | null;
  itemDescription?: DeserializedType<T, 'Edm.String'> | null;
  invoiceCode?: DeserializedType<T, 'Edm.Int32'> | null;
  invoiceNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  deliveryDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  contactPhone?: DeserializedType<T, 'Edm.String'> | null;
  street?: DeserializedType<T, 'Edm.String'> | null;
  block?: DeserializedType<T, 'Edm.String'> | null;
  zipCode?: DeserializedType<T, 'Edm.String'> | null;
  city?: DeserializedType<T, 'Edm.String'> | null;
  county?: DeserializedType<T, 'Edm.String'> | null;
  countryCode?: DeserializedType<T, 'Edm.String'> | null;
  stateCode?: DeserializedType<T, 'Edm.String'> | null;
  installLocation?: DeserializedType<T, 'Edm.String'> | null;
  contractCode?: DeserializedType<T, 'Edm.Int32'> | null;
  contractStartDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  contractEndDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  deliveryCode?: DeserializedType<T, 'Edm.Int32'> | null;
  deliveryNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  statusOfSerialNumber?: BoSerialNumberStatus | null;
  replaceSn?: DeserializedType<T, 'Edm.Int32'> | null;
  defaultTechnician?: DeserializedType<T, 'Edm.Int32'> | null;
  replacedBySn?: DeserializedType<T, 'Edm.Int32'> | null;
  defaultterritory?: DeserializedType<T, 'Edm.Int32'> | null;
  buildingFloorRoom?: DeserializedType<T, 'Edm.String'> | null;
  attachmentEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  streetNo?: DeserializedType<T, 'Edm.String'> | null;
  serviceBpType?: BoEquipmentBpType | null;
  customerEquipmentCardBusinessPartners?:
    | CustomerEquipmentCardBusinessPartner<T>[]
    | null;
  businessPartner?: BusinessPartnersType<T> | null;
  item?: ItemsType<T> | null;
  country?: CountriesType<T> | null;
  serviceContract?: ServiceContractsType<T> | null;
  employeeInfo?: EmployeesInfoType<T> | null;
  territory?: TerritoriesType<T> | null;
  attachments2?: Attachments2Type<T> | null;
}
