/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * EmployeePreviousEmpoymentInfo
 */
export interface EmployeePreviousEmpoymentInfo {
  /**
   * Employee No.
   * @nullable
   */
  employeeNo?: number;
  /**
   * Line Num.
   * @nullable
   */
  lineNum?: number;
  /**
   * From Dtae.
   * @nullable
   */
  fromDtae?: Moment;
  /**
   * To Date.
   * @nullable
   */
  toDate?: Moment;
  /**
   * Employer.
   * @nullable
   */
  employer?: string;
  /**
   * Position.
   * @nullable
   */
  position?: string;
  /**
   * Remarks.
   * @nullable
   */
  remarks?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[EmployeePreviousEmpoymentInfo.build]] instead.
 */
export function createEmployeePreviousEmpoymentInfo(json: any): EmployeePreviousEmpoymentInfo {
  return EmployeePreviousEmpoymentInfo.build(json);
}

/**
 * EmployeePreviousEmpoymentInfoField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class EmployeePreviousEmpoymentInfoField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, EmployeePreviousEmpoymentInfo> {
  /**
   * Representation of the [[EmployeePreviousEmpoymentInfo.employeeNo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  employeeNo: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('EmployeeNo', this, 'Edm.Int32');
  /**
   * Representation of the [[EmployeePreviousEmpoymentInfo.lineNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineNum', this, 'Edm.Int32');
  /**
   * Representation of the [[EmployeePreviousEmpoymentInfo.fromDtae]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fromDtae: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('FromDtae', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[EmployeePreviousEmpoymentInfo.toDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  toDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('ToDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[EmployeePreviousEmpoymentInfo.employer]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  employer: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Employer', this, 'Edm.String');
  /**
   * Representation of the [[EmployeePreviousEmpoymentInfo.position]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  position: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Position', this, 'Edm.String');
  /**
   * Representation of the [[EmployeePreviousEmpoymentInfo.remarks]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  remarks: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Remarks', this, 'Edm.String');

  /**
   * Creates an instance of EmployeePreviousEmpoymentInfoField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, EmployeePreviousEmpoymentInfo);
  }
}

export namespace EmployeePreviousEmpoymentInfo {
  /**
   * Metadata information on all properties of the `EmployeePreviousEmpoymentInfo` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<EmployeePreviousEmpoymentInfo>[] = [{
    originalName: 'EmployeeNo',
    name: 'employeeNo',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'LineNum',
    name: 'lineNum',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'FromDtae',
    name: 'fromDtae',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'ToDate',
    name: 'toDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'Employer',
    name: 'employer',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Position',
    name: 'position',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Remarks',
    name: 'remarks',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): EmployeePreviousEmpoymentInfo {
    return deserializeComplexTypeV4(json, EmployeePreviousEmpoymentInfo);
  }
}
