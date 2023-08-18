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
import type { ContractTemplatesApi } from './ContractTemplatesApi';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoRemindUnits } from './BoRemindUnits';
import { BoResolutionUnits } from './BoResolutionUnits';
import { BoContractTypes } from './BoContractTypes';
import { BoResponseUnit } from './BoResponseUnit';
import { Items, ItemsType } from './Items';
import { ServiceContracts, ServiceContractsType } from './ServiceContracts';

/**
 * This class represents the entity "ContractTemplates" of service "SAPB1".
 */
export class ContractTemplates<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ContractTemplatesType<T>
{
  /**
   * Technical entity name for ContractTemplates.
   */
  static _entityName = 'ContractTemplates';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the ContractTemplates entity
   */
  static _keys = ['TemplateName'];
  /**
   * Template Name.
   */
  templateName!: DeserializedType<T, 'Edm.String'>;
  /**
   * Template Is Deleted.
   * @nullable
   */
  templateIsDeleted?: BoYesNoEnum | null;
  /**
   * Template Is Renewal.
   * @nullable
   */
  templateIsRenewal?: BoYesNoEnum | null;
  /**
   * Remind Before Renewal.
   * @nullable
   */
  remindBeforeRenewal?: DeserializedType<T, 'Edm.Int32'> | null;
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
   * Response Value.
   * @nullable
   */
  responseValue?: DeserializedType<T, 'Edm.Int32'> | null;
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
   * Contract Type.
   * @nullable
   */
  contractType?: BoContractTypes | null;
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
   * Response Unit.
   * @nullable
   */
  responseUnit?: BoResponseUnit | null;
  /**
   * Resolution Time.
   * @nullable
   */
  resolutionTime?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Attachment Entry.
   * @nullable
   */
  attachmentEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * One-to-many navigation property to the {@link Items} entity.
   */
  items!: Items<T>[];
  /**
   * One-to-many navigation property to the {@link ServiceContracts} entity.
   */
  serviceContracts!: ServiceContracts<T>[];

  constructor(readonly _entityApi: ContractTemplatesApi<T>) {
    super(_entityApi);
  }
}

export interface ContractTemplatesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  templateName: DeserializedType<T, 'Edm.String'>;
  templateIsDeleted?: BoYesNoEnum | null;
  templateIsRenewal?: BoYesNoEnum | null;
  remindBeforeRenewal?: DeserializedType<T, 'Edm.Int32'> | null;
  remindUnit?: BoRemindUnits | null;
  durationOfCoverage?: DeserializedType<T, 'Edm.Int32'> | null;
  responseValue?: DeserializedType<T, 'Edm.Int32'> | null;
  resolutionUnit?: BoResolutionUnits | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  contractType?: BoContractTypes | null;
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
  remarks?: DeserializedType<T, 'Edm.String'> | null;
  includeHolidays?: BoYesNoEnum | null;
  responseUnit?: BoResponseUnit | null;
  resolutionTime?: DeserializedType<T, 'Edm.Int32'> | null;
  attachmentEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  items: ItemsType<T>[];
  serviceContracts: ServiceContractsType<T>[];
}
