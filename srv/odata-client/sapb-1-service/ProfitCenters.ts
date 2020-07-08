/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProfitCentersRequestBuilder } from './ProfitCentersRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink, OneToOneLink, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "ProfitCenters" of service "SAPB1".
 */
export class ProfitCenters extends Entity implements ProfitCentersType {
  /**
   * Technical entity name for ProfitCenters.
   */
  static _entityName = 'ProfitCenters';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for ProfitCenters.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
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
  /**
   * Group Code.
   * @nullable
   */
  groupCode?: string;
  /**
   * In Which Dimension.
   * @nullable
   */
  inWhichDimension?: number;
  /**
   * Cost Center Type.
   * @nullable
   */
  costCenterType?: string;
  /**
   * Effective From.
   * @nullable
   */
  effectiveFrom?: Moment;
  /**
   * Effective To.
   * @nullable
   */
  effectiveTo?: Moment;
  /**
   * Center Owner.
   * @nullable
   */
  centerOwner?: number;
  /**
   * One-to-one navigation property to the [[Dimensions]] entity.
   */
  dimension!: Dimensions;
  /**
   * One-to-one navigation property to the [[CostCenterTypes]] entity.
   */
  costCenterType2!: CostCenterTypes;
  /**
   * One-to-one navigation property to the [[EmployeesInfo]] entity.
   */
  employeeInfo!: EmployeesInfo;
  /**
   * One-to-many navigation property to the [[EmployeesInfo]] entity.
   */
  employeesInfo!: EmployeesInfo[];

  /**
   * Returns an entity builder to construct instances `ProfitCenters`.
   * @returns A builder that constructs instances of entity type `ProfitCenters`.
   */
  static builder(): EntityBuilderType<ProfitCenters, ProfitCentersTypeForceMandatory> {
    return Entity.entityBuilder(ProfitCenters);
  }

  /**
   * Returns a request builder to construct requests for operations on the `ProfitCenters` entity type.
   * @returns A `ProfitCenters` request builder.
   */
  static requestBuilder(): ProfitCentersRequestBuilder {
    return new ProfitCentersRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `ProfitCenters`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `ProfitCenters`.
   */
  static customField(fieldName: string): CustomField<ProfitCenters> {
    return Entity.customFieldSelector(fieldName, ProfitCenters);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { Dimensions, DimensionsType } from './Dimensions';
import { CostCenterTypes, CostCenterTypesType } from './CostCenterTypes';
import { EmployeesInfo, EmployeesInfoType } from './EmployeesInfo';

export interface ProfitCentersType {
  centerCode?: string;
  centerName?: string;
  groupCode?: string;
  inWhichDimension?: number;
  costCenterType?: string;
  effectiveFrom?: Moment;
  effectiveTo?: Moment;
  centerOwner?: number;
  dimension: DimensionsType;
  costCenterType2: CostCenterTypesType;
  employeeInfo: EmployeesInfoType;
  employeesInfo: EmployeesInfoType[];
}

export interface ProfitCentersTypeForceMandatory {
  centerCode: string;
  centerName: string;
  groupCode: string;
  inWhichDimension: number;
  costCenterType: string;
  effectiveFrom: Moment;
  effectiveTo: Moment;
  centerOwner: number;
  dimension: DimensionsType;
  costCenterType2: CostCenterTypesType;
  employeeInfo: EmployeesInfoType;
  employeesInfo: EmployeesInfoType[];
}

export namespace ProfitCenters {
  /**
   * Static representation of the [[centerCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CENTER_CODE: StringField<ProfitCenters> = new StringField('CenterCode', ProfitCenters, 'Edm.String');
  /**
   * Static representation of the [[centerName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CENTER_NAME: StringField<ProfitCenters> = new StringField('CenterName', ProfitCenters, 'Edm.String');
  /**
   * Static representation of the [[groupCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GROUP_CODE: StringField<ProfitCenters> = new StringField('GroupCode', ProfitCenters, 'Edm.String');
  /**
   * Static representation of the [[inWhichDimension]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IN_WHICH_DIMENSION: NumberField<ProfitCenters> = new NumberField('InWhichDimension', ProfitCenters, 'Edm.Int32');
  /**
   * Static representation of the [[costCenterType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COST_CENTER_TYPE: StringField<ProfitCenters> = new StringField('CostCenterType', ProfitCenters, 'Edm.String');
  /**
   * Static representation of the [[effectiveFrom]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EFFECTIVE_FROM: DateField<ProfitCenters> = new DateField('EffectiveFrom', ProfitCenters, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[effectiveTo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EFFECTIVE_TO: DateField<ProfitCenters> = new DateField('EffectiveTo', ProfitCenters, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[centerOwner]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CENTER_OWNER: NumberField<ProfitCenters> = new NumberField('CenterOwner', ProfitCenters, 'Edm.Int32');
  /**
   * Static representation of the one-to-one navigation property [[dimension]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DIMENSION: OneToOneLink<ProfitCenters, Dimensions> = new OneToOneLink('Dimension', ProfitCenters, Dimensions);
  /**
   * Static representation of the one-to-one navigation property [[costCenterType2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COST_CENTER_TYPE_2: OneToOneLink<ProfitCenters, CostCenterTypes> = new OneToOneLink('CostCenterType2', ProfitCenters, CostCenterTypes);
  /**
   * Static representation of the one-to-one navigation property [[employeeInfo]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYEE_INFO: OneToOneLink<ProfitCenters, EmployeesInfo> = new OneToOneLink('EmployeeInfo', ProfitCenters, EmployeesInfo);
  /**
   * Static representation of the one-to-many navigation property [[employeesInfo]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYEES_INFO: OneToManyLink<ProfitCenters, EmployeesInfo> = new OneToManyLink('EmployeesInfo', ProfitCenters, EmployeesInfo);
  /**
   * All fields of the ProfitCenters entity.
   */
  export const _allFields: Array<StringField<ProfitCenters> | NumberField<ProfitCenters> | DateField<ProfitCenters> | OneToOneLink<ProfitCenters, Dimensions> | OneToOneLink<ProfitCenters, CostCenterTypes> | OneToOneLink<ProfitCenters, EmployeesInfo> | OneToManyLink<ProfitCenters, EmployeesInfo>> = [
    ProfitCenters.CENTER_CODE,
    ProfitCenters.CENTER_NAME,
    ProfitCenters.GROUP_CODE,
    ProfitCenters.IN_WHICH_DIMENSION,
    ProfitCenters.COST_CENTER_TYPE,
    ProfitCenters.EFFECTIVE_FROM,
    ProfitCenters.EFFECTIVE_TO,
    ProfitCenters.CENTER_OWNER,
    ProfitCenters.DIMENSION,
    ProfitCenters.COST_CENTER_TYPE_2,
    ProfitCenters.EMPLOYEE_INFO,
    ProfitCenters.EMPLOYEES_INFO
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<ProfitCenters> = new AllFields('*', ProfitCenters);
  /**
   * All key fields of the ProfitCenters entity.
   */
  export const _keyFields: Array<Field<ProfitCenters>> = [ProfitCenters.CENTER_CODE];
  /**
   * Mapping of all key field names to the respective static field property ProfitCenters.
   */
  export const _keys: { [keys: string]: Field<ProfitCenters> } = ProfitCenters._keyFields.reduce((acc: { [keys: string]: Field<ProfitCenters> }, field: Field<ProfitCenters>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
