/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * EmployeeReviewsInfo
 */
export interface EmployeeReviewsInfo {
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
   * Date.
   * @nullable
   */
  date?: Moment;
  /**
   * Review Description.
   * @nullable
   */
  reviewDescription?: string;
  /**
   * Manager.
   * @nullable
   */
  manager?: number;
  /**
   * Grade.
   * @nullable
   */
  grade?: string;
  /**
   * Remarks.
   * @nullable
   */
  remarks?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[EmployeeReviewsInfo.build]] instead.
 */
export function createEmployeeReviewsInfo(json: any): EmployeeReviewsInfo {
  return EmployeeReviewsInfo.build(json);
}

/**
 * EmployeeReviewsInfoField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class EmployeeReviewsInfoField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[EmployeeReviewsInfo.employeeNo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  employeeNo: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('EmployeeNo', this, 'Edm.Int32');
  /**
   * Representation of the [[EmployeeReviewsInfo.lineNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineNum', this, 'Edm.Int32');
  /**
   * Representation of the [[EmployeeReviewsInfo.date]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  date: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('Date', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[EmployeeReviewsInfo.reviewDescription]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reviewDescription: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ReviewDescription', this, 'Edm.String');
  /**
   * Representation of the [[EmployeeReviewsInfo.manager]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  manager: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Manager', this, 'Edm.Int32');
  /**
   * Representation of the [[EmployeeReviewsInfo.grade]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  grade: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Grade', this, 'Edm.String');
  /**
   * Representation of the [[EmployeeReviewsInfo.remarks]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  remarks: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Remarks', this, 'Edm.String');
}

export namespace EmployeeReviewsInfo {
  export function build(json: { [keys: string]: FieldType }): EmployeeReviewsInfo {
    return createComplexType(json, {
      EmployeeNo: (employeeNo: number) => ({ employeeNo: edmToTs(employeeNo, 'Edm.Int32') }),
      LineNum: (lineNum: number) => ({ lineNum: edmToTs(lineNum, 'Edm.Int32') }),
      Date: (date: Moment) => ({ date: edmToTs(date, 'Edm.DateTimeOffset') }),
      ReviewDescription: (reviewDescription: string) => ({ reviewDescription: edmToTs(reviewDescription, 'Edm.String') }),
      Manager: (manager: number) => ({ manager: edmToTs(manager, 'Edm.Int32') }),
      Grade: (grade: string) => ({ grade: edmToTs(grade, 'Edm.String') }),
      Remarks: (remarks: string) => ({ remarks: edmToTs(remarks, 'Edm.String') })
    });
  }
}
