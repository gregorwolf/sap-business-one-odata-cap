/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * PmsOpenIssueData
 */
export interface PmsOpenIssueData {
  /**
   * Line Id.
   * @nullable
   */
  lineId?: number;
  /**
   * Stage Id.
   * @nullable
   */
  stageId?: number;
  /**
   * Area.
   * @nullable
   */
  area?: number;
  /**
   * Priority.
   * @nullable
   */
  priority?: number;
  /**
   * Remarks.
   * @nullable
   */
  remarks?: string;
  /**
   * Solution Id.
   * @nullable
   */
  solutionId?: number;
  /**
   * Responsible.
   * @nullable
   */
  responsible?: number;
  /**
   * Entered By.
   * @nullable
   */
  enteredBy?: number;
  /**
   * Entered Date.
   * @nullable
   */
  enteredDate?: Moment;
  /**
   * Effort.
   * @nullable
   */
  effort?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[PmsOpenIssueData.build]] instead.
 */
export function createPmsOpenIssueData(json: any): PmsOpenIssueData {
  return PmsOpenIssueData.build(json);
}

/**
 * PmsOpenIssueDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class PmsOpenIssueDataField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[PmsOpenIssueData.lineId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineID', this, 'Edm.Int32');
  /**
   * Representation of the [[PmsOpenIssueData.stageId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stageId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('StageID', this, 'Edm.Int32');
  /**
   * Representation of the [[PmsOpenIssueData.area]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  area: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Area', this, 'Edm.Int32');
  /**
   * Representation of the [[PmsOpenIssueData.priority]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  priority: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Priority', this, 'Edm.Int32');
  /**
   * Representation of the [[PmsOpenIssueData.remarks]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  remarks: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Remarks', this, 'Edm.String');
  /**
   * Representation of the [[PmsOpenIssueData.solutionId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  solutionId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SolutionID', this, 'Edm.Int32');
  /**
   * Representation of the [[PmsOpenIssueData.responsible]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  responsible: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Responsible', this, 'Edm.Int32');
  /**
   * Representation of the [[PmsOpenIssueData.enteredBy]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  enteredBy: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('EnteredBy', this, 'Edm.Int32');
  /**
   * Representation of the [[PmsOpenIssueData.enteredDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  enteredDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('EnteredDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[PmsOpenIssueData.effort]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  effort: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Effort', this, 'Edm.Double');
}

export namespace PmsOpenIssueData {
  export function build(json: { [keys: string]: FieldType }): PmsOpenIssueData {
    return createComplexType(json, {
      LineID: (lineId: number) => ({ lineId: edmToTs(lineId, 'Edm.Int32') }),
      StageID: (stageId: number) => ({ stageId: edmToTs(stageId, 'Edm.Int32') }),
      Area: (area: number) => ({ area: edmToTs(area, 'Edm.Int32') }),
      Priority: (priority: number) => ({ priority: edmToTs(priority, 'Edm.Int32') }),
      Remarks: (remarks: string) => ({ remarks: edmToTs(remarks, 'Edm.String') }),
      SolutionID: (solutionId: number) => ({ solutionId: edmToTs(solutionId, 'Edm.Int32') }),
      Responsible: (responsible: number) => ({ responsible: edmToTs(responsible, 'Edm.Int32') }),
      EnteredBy: (enteredBy: number) => ({ enteredBy: edmToTs(enteredBy, 'Edm.Int32') }),
      EnteredDate: (enteredDate: Moment) => ({ enteredDate: edmToTs(enteredDate, 'Edm.DateTimeOffset') }),
      Effort: (effort: number) => ({ effort: edmToTs(effort, 'Edm.Double') })
    });
  }
}
