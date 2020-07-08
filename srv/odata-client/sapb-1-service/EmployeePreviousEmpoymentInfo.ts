/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export class EmployeePreviousEmpoymentInfoField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}

export namespace EmployeePreviousEmpoymentInfo {
  export function build(json: { [keys: string]: FieldType }): EmployeePreviousEmpoymentInfo {
    return createComplexType(json, {
      EmployeeNo: (employeeNo: number) => ({ employeeNo: edmToTs(employeeNo, 'Edm.Int32') }),
      LineNum: (lineNum: number) => ({ lineNum: edmToTs(lineNum, 'Edm.Int32') }),
      FromDtae: (fromDtae: Moment) => ({ fromDtae: edmToTs(fromDtae, 'Edm.DateTimeOffset') }),
      ToDate: (toDate: Moment) => ({ toDate: edmToTs(toDate, 'Edm.DateTimeOffset') }),
      Employer: (employer: string) => ({ employer: edmToTs(employer, 'Edm.String') }),
      Position: (position: string) => ({ position: edmToTs(position, 'Edm.String') }),
      Remarks: (remarks: string) => ({ remarks: edmToTs(remarks, 'Edm.String') })
    });
  }
}
