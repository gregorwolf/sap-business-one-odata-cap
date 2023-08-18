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
import { ServiceContractLine } from './ServiceContractLine';
import type { ServiceContractsApi } from './ServiceContractsApi';
import { BoSvcContractStatus } from './BoSvcContractStatus';
import { BoContractTypes } from './BoContractTypes';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoRemindUnits } from './BoRemindUnits';
import { BoResolutionUnits } from './BoResolutionUnits';
import { BoServiceTypes } from './BoServiceTypes';
import { BoResponseUnit } from './BoResponseUnit';
import { ServiceTypeEnum } from './ServiceTypeEnum';
import { ServiceCalls, ServiceCallsType } from './ServiceCalls';
import {
  CustomerEquipmentCards,
  CustomerEquipmentCardsType
} from './CustomerEquipmentCards';
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
import { Users, UsersType } from './Users';
import { ContractTemplates, ContractTemplatesType } from './ContractTemplates';
import { Attachments2, Attachments2Type } from './Attachments2';

/**
 * This class represents the entity "ServiceContracts" of service "SAPB1".
 */
export class ServiceContracts<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ServiceContractsType<T>
{
  /**
   * Technical entity name for ServiceContracts.
   */
  static _entityName = 'ServiceContracts';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the ServiceContracts entity
   */
  static _keys = ['ContractID'];
  /**
   * Contract Id.
   */
  contractId!: DeserializedType<T, 'Edm.Int32'>;
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
   * Contact Code.
   * @nullable
   */
  contactCode?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Owner.
   * @nullable
   */
  owner?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Status.
   * @nullable
   */
  status?: BoSvcContractStatus | null;
  /**
   * Contract Template.
   * @nullable
   */
  contractTemplate?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contract Type.
   * @nullable
   */
  contractType?: BoContractTypes | null;
  /**
   * Renewal.
   * @nullable
   */
  renewal?: BoYesNoEnum | null;
  /**
   * Reminder Time.
   * @nullable
   */
  reminderTime?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Remind Unit.
   * @nullable
   */
  remindUnit?: BoRemindUnits | null;
  /**
   * Duration Of Coverage.
   * @nullable
   */
  durationOfCoverage?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Start Date.
   * @nullable
   */
  startDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * End Date.
   * @nullable
   */
  endDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Resolution Time.
   * @nullable
   */
  resolutionTime?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Resolution Unit.
   * @nullable
   */
  resolutionUnit?: BoResolutionUnits | null;
  /**
   * Description.
   * @nullable
   */
  description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Monday Enabled.
   * @nullable
   */
  mondayEnabled?: BoYesNoEnum | null;
  /**
   * Tuesday Enabled.
   * @nullable
   */
  tuesdayEnabled?: BoYesNoEnum | null;
  /**
   * Wednesday Enabled.
   * @nullable
   */
  wednesdayEnabled?: BoYesNoEnum | null;
  /**
   * Thursday Enabled.
   * @nullable
   */
  thursdayEnabled?: BoYesNoEnum | null;
  /**
   * Friday Enabled.
   * @nullable
   */
  fridayEnabled?: BoYesNoEnum | null;
  /**
   * Saturday Enabled.
   * @nullable
   */
  saturdayEnabled?: BoYesNoEnum | null;
  /**
   * Sunday Enabled.
   * @nullable
   */
  sundayEnabled?: BoYesNoEnum | null;
  /**
   * Monday Start.
   * @nullable
   */
  mondayStart?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  /**
   * Monday End.
   * @nullable
   */
  mondayEnd?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  /**
   * Tuesday Start.
   * @nullable
   */
  tuesdayStart?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  /**
   * Tuesday End.
   * @nullable
   */
  tuesdayEnd?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  /**
   * Wednesday Start.
   * @nullable
   */
  wednesdayStart?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  /**
   * Wednesday End.
   * @nullable
   */
  wednesdayEnd?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  /**
   * Thursday Start.
   * @nullable
   */
  thursdayStart?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  /**
   * Thursday End.
   * @nullable
   */
  thursdayEnd?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  /**
   * Friday Start.
   * @nullable
   */
  fridayStart?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  /**
   * Friday End.
   * @nullable
   */
  fridayEnd?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  /**
   * Saturday Start.
   * @nullable
   */
  saturdayStart?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  /**
   * Saturday End.
   * @nullable
   */
  saturdayEnd?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  /**
   * Sunday Start.
   * @nullable
   */
  sundayStart?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  /**
   * Sunday End.
   * @nullable
   */
  sundayEnd?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  /**
   * Include Parts.
   * @nullable
   */
  includeParts?: BoYesNoEnum | null;
  /**
   * Include Labor.
   * @nullable
   */
  includeLabor?: BoYesNoEnum | null;
  /**
   * Include Travel.
   * @nullable
   */
  includeTravel?: BoYesNoEnum | null;
  /**
   * Template Remarks.
   * @nullable
   */
  templateRemarks?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Remarks.
   * @nullable
   */
  remarks?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Include Holidays.
   * @nullable
   */
  includeHolidays?: BoYesNoEnum | null;
  /**
   * Service Type.
   * @nullable
   */
  serviceType?: BoServiceTypes | null;
  /**
   * Response Unit.
   * @nullable
   */
  responseUnit?: BoResponseUnit | null;
  /**
   * Response Time.
   * @nullable
   */
  responseTime?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Termination Date.
   * @nullable
   */
  terminationDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Attachment Entry.
   * @nullable
   */
  attachmentEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Service Bp Type.
   * @nullable
   */
  serviceBpType?: ServiceTypeEnum | null;
  /**
   * Service Contract Lines.
   * @nullable
   */
  serviceContractLines?: ServiceContractLine<T>[] | null;
  /**
   * One-to-many navigation property to the {@link ServiceCalls} entity.
   */
  serviceCalls!: ServiceCalls<T>[];
  /**
   * One-to-many navigation property to the {@link CustomerEquipmentCards} entity.
   */
  customerEquipmentCards!: CustomerEquipmentCards<T>[];
  /**
   * One-to-one navigation property to the {@link BusinessPartners} entity.
   */
  businessPartner?: BusinessPartners<T> | null;
  /**
   * One-to-one navigation property to the {@link Users} entity.
   */
  user?: Users<T> | null;
  /**
   * One-to-one navigation property to the {@link ContractTemplates} entity.
   */
  contractTemplate2?: ContractTemplates<T> | null;
  /**
   * One-to-one navigation property to the {@link Attachments2} entity.
   */
  attachments2?: Attachments2<T> | null;

  constructor(readonly _entityApi: ServiceContractsApi<T>) {
    super(_entityApi);
  }
}

export interface ServiceContractsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  contractId: DeserializedType<T, 'Edm.Int32'>;
  customerCode?: DeserializedType<T, 'Edm.String'> | null;
  customerName?: DeserializedType<T, 'Edm.String'> | null;
  contactCode?: DeserializedType<T, 'Edm.Int32'> | null;
  owner?: DeserializedType<T, 'Edm.Int32'> | null;
  status?: BoSvcContractStatus | null;
  contractTemplate?: DeserializedType<T, 'Edm.String'> | null;
  contractType?: BoContractTypes | null;
  renewal?: BoYesNoEnum | null;
  reminderTime?: DeserializedType<T, 'Edm.Int32'> | null;
  remindUnit?: BoRemindUnits | null;
  durationOfCoverage?: DeserializedType<T, 'Edm.Int32'> | null;
  startDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  endDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  resolutionTime?: DeserializedType<T, 'Edm.Int32'> | null;
  resolutionUnit?: BoResolutionUnits | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  mondayEnabled?: BoYesNoEnum | null;
  tuesdayEnabled?: BoYesNoEnum | null;
  wednesdayEnabled?: BoYesNoEnum | null;
  thursdayEnabled?: BoYesNoEnum | null;
  fridayEnabled?: BoYesNoEnum | null;
  saturdayEnabled?: BoYesNoEnum | null;
  sundayEnabled?: BoYesNoEnum | null;
  mondayStart?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  mondayEnd?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  tuesdayStart?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  tuesdayEnd?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  wednesdayStart?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  wednesdayEnd?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  thursdayStart?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  thursdayEnd?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  fridayStart?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  fridayEnd?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  saturdayStart?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  saturdayEnd?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  sundayStart?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  sundayEnd?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  includeParts?: BoYesNoEnum | null;
  includeLabor?: BoYesNoEnum | null;
  includeTravel?: BoYesNoEnum | null;
  templateRemarks?: DeserializedType<T, 'Edm.String'> | null;
  remarks?: DeserializedType<T, 'Edm.String'> | null;
  includeHolidays?: BoYesNoEnum | null;
  serviceType?: BoServiceTypes | null;
  responseUnit?: BoResponseUnit | null;
  responseTime?: DeserializedType<T, 'Edm.Int32'> | null;
  terminationDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  attachmentEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  serviceBpType?: ServiceTypeEnum | null;
  serviceContractLines?: ServiceContractLine<T>[] | null;
  serviceCalls: ServiceCallsType<T>[];
  customerEquipmentCards: CustomerEquipmentCardsType<T>[];
  businessPartner?: BusinessPartnersType<T> | null;
  user?: UsersType<T> | null;
  contractTemplate2?: ContractTemplatesType<T> | null;
  attachments2?: Attachments2Type<T> | null;
}
