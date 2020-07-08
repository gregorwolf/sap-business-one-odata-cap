/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * EmployeeEducationInfo
 */
export interface EmployeeEducationInfo {
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
   * From Date.
   * @nullable
   */
  fromDate?: Moment;
  /**
   * To Date.
   * @nullable
   */
  toDate?: Moment;
  /**
   * Education Type.
   * @nullable
   */
  educationType?: number;
  /**
   * Institute.
   * @nullable
   */
  institute?: string;
  /**
   * Major.
   * @nullable
   */
  major?: string;
  /**
   * Diploma.
   * @nullable
   */
  diploma?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[EmployeeEducationInfo.build]] instead.
 */
export function createEmployeeEducationInfo(json: any): EmployeeEducationInfo {
  return EmployeeEducationInfo.build(json);
}

/**
 * EmployeeEducationInfoField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class EmployeeEducationInfoField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[EmployeeEducationInfo.employeeNo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  employeeNo: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('EmployeeNo', this, 'Edm.Int32');
  /**
   * Representation of the [[EmployeeEducationInfo.lineNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineNum', this, 'Edm.Int32');
  /**
   * Representation of the [[EmployeeEducationInfo.fromDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fromDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('FromDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[EmployeeEducationInfo.toDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  toDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('ToDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[EmployeeEducationInfo.educationType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  educationType: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('EducationType', this, 'Edm.Int32');
  /**
   * Representation of the [[EmployeeEducationInfo.institute]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  institute: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Institute', this, 'Edm.String');
  /**
   * Representation of the [[EmployeeEducationInfo.major]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  major: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Major', this, 'Edm.String');
  /**
   * Representation of the [[EmployeeEducationInfo.diploma]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  diploma: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Diploma', this, 'Edm.String');
}

export namespace EmployeeEducationInfo {
  export function build(json: { [keys: string]: FieldType }): EmployeeEducationInfo {
    return createComplexType(json, {
      EmployeeNo: (employeeNo: number) => ({ employeeNo: edmToTs(employeeNo, 'Edm.Int32') }),
      LineNum: (lineNum: number) => ({ lineNum: edmToTs(lineNum, 'Edm.Int32') }),
      FromDate: (fromDate: Moment) => ({ fromDate: edmToTs(fromDate, 'Edm.DateTimeOffset') }),
      ToDate: (toDate: Moment) => ({ toDate: edmToTs(toDate, 'Edm.DateTimeOffset') }),
      EducationType: (educationType: number) => ({ educationType: edmToTs(educationType, 'Edm.Int32') }),
      Institute: (institute: string) => ({ institute: edmToTs(institute, 'Edm.String') }),
      Major: (major: string) => ({ major: edmToTs(major, 'Edm.String') }),
      Diploma: (diploma: string) => ({ diploma: edmToTs(diploma, 'Edm.String') })
    });
  }
}
