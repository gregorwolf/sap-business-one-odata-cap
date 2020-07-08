/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * ProductTreeStage
 */
export interface ProductTreeStage {
  /**
   * Father.
   * @nullable
   */
  father?: string;
  /**
   * Stage Id.
   * @nullable
   */
  stageId?: number;
  /**
   * Sequence Number.
   * @nullable
   */
  sequenceNumber?: number;
  /**
   * Stage Entry.
   * @nullable
   */
  stageEntry?: number;
  /**
   * Name.
   * @nullable
   */
  name?: string;
  /**
   * Waiting Days.
   * @nullable
   */
  waitingDays?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[ProductTreeStage.build]] instead.
 */
export function createProductTreeStage(json: any): ProductTreeStage {
  return ProductTreeStage.build(json);
}

/**
 * ProductTreeStageField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ProductTreeStageField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ProductTreeStage.father]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  father: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Father', this, 'Edm.String');
  /**
   * Representation of the [[ProductTreeStage.stageId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stageId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('StageID', this, 'Edm.Int32');
  /**
   * Representation of the [[ProductTreeStage.sequenceNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sequenceNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SequenceNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[ProductTreeStage.stageEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stageEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('StageEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[ProductTreeStage.name]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  name: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Name', this, 'Edm.String');
  /**
   * Representation of the [[ProductTreeStage.waitingDays]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  waitingDays: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('WaitingDays', this, 'Edm.Double');
}

export namespace ProductTreeStage {
  export function build(json: { [keys: string]: FieldType }): ProductTreeStage {
    return createComplexType(json, {
      Father: (father: string) => ({ father: edmToTs(father, 'Edm.String') }),
      StageID: (stageId: number) => ({ stageId: edmToTs(stageId, 'Edm.Int32') }),
      SequenceNumber: (sequenceNumber: number) => ({ sequenceNumber: edmToTs(sequenceNumber, 'Edm.Int32') }),
      StageEntry: (stageEntry: number) => ({ stageEntry: edmToTs(stageEntry, 'Edm.Int32') }),
      Name: (name: string) => ({ name: edmToTs(name, 'Edm.String') }),
      WaitingDays: (waitingDays: number) => ({ waitingDays: edmToTs(waitingDays, 'Edm.Double') })
    });
  }
}
