const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Mikal_3DObject,
		C3.Plugins.Keyboard,
		C3.Plugins.Browser,
		C3.Plugins.Sprite,
		C3.Plugins.Camera3D,
		C3.Plugins.Text,
		C3.Behaviors.mikal_cannon_3d_physics,
		C3.Behaviors.Timer,
		C3.Plugins.Button,
		C3.Behaviors.Fade,
		C3.Behaviors.mikal_rotate_shape,
		C3.Plugins.sliderbar,
		C3.Plugins.mikal_physics_render,
		C3.Plugins.Json,
		C3.Plugins.Shape3D,
		C3.Behaviors.Flash,
		C3.Plugins.Touch,
		C3.Behaviors.Tween,
		C3.Plugins.AJAX,
		C3.Plugins.LocalStorage,
		C3.Plugins.Mouse,
		C3.Plugins.PlatformInfo,
		C3.Plugins.skymen_limit_fps,
		C3.Plugins.Particles,
		C3.Behaviors.Sin,
		C3.Behaviors.skymenTrail,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Plugins.Mikal_3DObject.Cnds.OnLoaded,
		C3.Plugins.Mikal_3DObject.Acts.SetStaticGeometry,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.LocalStorage.Acts.CheckItemExists,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Button.Cnds.OnClicked,
		C3.Plugins.LocalStorage.Acts.ClearStorage,
		C3.Plugins.LocalStorage.Cnds.OnItemMissing,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Exps.int,
		C3.Plugins.Json.Exps.Get,
		C3.Plugins.Sprite.Cnds.OnCreated,
		C3.Plugins.Sprite.Cnds.PickChildren,
		C3.Plugins.Mikal_3DObject.Acts.SetInstanceVar,
		C3.Plugins.Mikal_3DObject.Exps.X,
		C3.Plugins.Mikal_3DObject.Exps.Y,
		C3.Plugins.Mikal_3DObject.Exps.ZElevation,
		C3.Plugins.LocalStorage.Cnds.OnItemExists,
		C3.Plugins.Json.Acts.Parse,
		C3.Plugins.LocalStorage.Exps.ItemValue,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Plugins.Mikal_3DObject.Acts.SetPos,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.Mikal_3DObject.Acts.SetBoolInstanceVar,
		C3.Plugins.System.Cnds.Else,
		C3.Behaviors.mikal_cannon_3d_physics.Acts.Rotate,
		C3.Plugins.Sprite.Acts.SetAngle,
		C3.Plugins.Json.Cnds.ForEach,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Plugins.Shape3D.Acts.SetInstanceVar,
		C3.Plugins.Json.Acts.SetValue,
		C3.Plugins.Json.Acts.SetObject,
		C3.Plugins.Json.Acts.SetPath,
		C3.Plugins.System.Cnds.ForEach,
		C3.Plugins.Mikal_3DObject.Cnds.IsBoolInstanceVarSet,
		C3.Plugins.Json.Acts.SetArray,
		C3.Plugins.System.Exps.loopindex,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.LocalStorage.Acts.SetItem,
		C3.Plugins.Json.Exps.ToBeautifiedString,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.System.Cnds.TriggerOnce,
		C3.Plugins.Sprite.Acts.SetAnimSpeed,
		C3.Plugins.System.Acts.SetGroupActive,
		C3.Plugins.System.Acts.SetBoolVar,
		C3.Plugins.Text.Acts.SetVisible,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.System.Exps.tickcount,
		C3.Plugins.System.Exps.fps,
		C3.Plugins.Text.Cnds.CompareInstanceVar,
		C3.Plugins.Mikal_3DObject.Exps.Count,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.System.Acts.ToggleBoolVar,
		C3.Plugins.System.Cnds.CompareBoolVar,
		C3.Behaviors.mikal_cannon_3d_physics.Acts.EnableDebugRender,
		C3.Plugins.Touch.Cnds.OnTapGesture,
		C3.Behaviors.Timer.Cnds.IsTimerRunning,
		C3.Behaviors.Timer.Acts.StartTimer,
		C3.Behaviors.Timer.Cnds.OnTimer,
		C3.Plugins.Mikal_3DObject.Acts.SetZElevation0,
		C3.Plugins.System.Acts.SubVar,
		C3.Behaviors.Tween.Acts.TweenOneProperty,
		C3.Plugins.Sprite.Acts.MoveToBottom,
		C3.Plugins.Button.Acts.SetBoolInstanceVar,
		C3.Plugins.Button.Acts.SetText,
		C3.Plugins.Sprite.Acts.SetOpacity,
		C3.Plugins.Button.Acts.SetVisible,
		C3.Plugins.Button.Cnds.IsBoolInstanceVarSet,
		C3.Plugins.sliderbar.Acts.SetValue,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.sliderbar.Acts.SetMinimum,
		C3.Plugins.sliderbar.Acts.SetMaximum,
		C3.Plugins.Sprite.Exps.ZElevation,
		C3.Plugins.Camera3D.Exps.LookZ,
		C3.Plugins.Camera3D.Exps.LookY,
		C3.Plugins.sliderbar.Cnds.OnChanging,
		C3.Plugins.Sprite.Acts.SetY,
		C3.Plugins.sliderbar.Exps.Value,
		C3.Plugins.Camera3D.Acts.LookAtPosition,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.System.Exps.layoutwidth,
		C3.Plugins.Sprite.Acts.SetZElevation,
		C3.Plugins.System.Exps.projectversion,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.System.Exps.viewportleft,
		C3.Plugins.System.Exps.viewporttop,
		C3.Plugins.System.Exps.viewportright,
		C3.Plugins.System.Exps.viewportbottom,
		C3.Plugins.Sprite.Exps.Width,
		C3.Plugins.Sprite.Exps.Height,
		C3.Plugins.System.Acts.SetLayerVisible,
		C3.Plugins.Mikal_3DObject.Acts.SetOpacity,
		C3.Behaviors.mikal_cannon_3d_physics.Cnds.OnPhysicsReady,
		C3.Behaviors.mikal_cannon_3d_physics.Acts.SetFriction,
		C3.Behaviors.mikal_cannon_3d_physics.Acts.SetRestitution,
		C3.Behaviors.mikal_cannon_3d_physics.Acts.SetWorldGravity,
		C3.Plugins.Browser.Acts.ConsoleLog,
		C3.Plugins.Mikal_3DObject.Cnds.IsLoaded,
		C3.Behaviors.mikal_cannon_3d_physics.Cnds.IsEnabled,
		C3.Behaviors.mikal_cannon_3d_physics.Acts.EnablePhysics,
		C3.Behaviors.mikal_cannon_3d_physics.Acts.SetCollisionGroups,
		C3.Behaviors.mikal_cannon_3d_physics.Acts.SetMass,
		C3.Behaviors.mikal_cannon_3d_physics.Acts.SetLinearDamping,
		C3.Behaviors.mikal_cannon_3d_physics.Acts.SetAngularDamping,
		C3.Behaviors.mikal_cannon_3d_physics.Acts.Translate,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.Plugins.Mikal_3DObject.Exps.UID,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.Mikal_3DObject.Cnds.CompareInstanceVar,
		C3.Plugins.Mikal_3DObject.Acts.Destroy,
		C3.Plugins.Mikal_3DObject.Acts.SetVisible,
		C3.Plugins.Mikal_3DObject.Exps.XAngle,
		C3.Plugins.Mikal_3DObject.Acts.SubInstanceVar,
		C3.Plugins.Mikal_3DObject.Acts.AddInstanceVar,
		C3.Plugins.Mikal_3DObject.Cnds.CompareY,
		C3.Plugins.Mikal_3DObject.Cnds.OnCreated,
		C3.Plugins.System.Exps.random,
		C3.Behaviors.Tween.Acts.TweenTwoProperties,
		C3.Behaviors.Tween.Cnds.OnTweensFinished,
		C3.Plugins.Browser.Acts.Vibrate,
		C3.Behaviors.Tween.Acts.StopAllTweens,
		C3.Plugins.Sprite.Exps.ImagePointX,
		C3.Plugins.Sprite.Exps.ImagePointY,
		C3.Plugins.Json.Exps.ArraySize,
		C3.Behaviors.Tween.Cnds.IsAnyPlaying,
		C3.Plugins.Sprite.Acts.SetSize,
		C3.Plugins.Text.Exps.X,
		C3.Plugins.Text.Exps.Y,
		C3.Plugins.Sprite.Cnds.IsOverlapping,
		C3.Behaviors.mikal_cannon_3d_physics.Acts.Raycast,
		C3.Behaviors.mikal_cannon_3d_physics.Cnds.OnRaycastResult,
		C3.Behaviors.mikal_cannon_3d_physics.Exps.RaycastResultAsJSON,
		C3.Behaviors.mikal_cannon_3d_physics.Acts.ApplyImpulse,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Plugins.Sprite.Cnds.OnAnyAnimFinished,
		C3.Plugins.Sprite.Exps.AnimationFrame,
		C3.Plugins.Sprite.Cnds.CompareFrame,
		C3.Plugins.Sprite.Exps.AnimationFrameCount,
		C3.Plugins.Shape3D.Exps.X,
		C3.Plugins.Shape3D.Exps.Y,
		C3.Plugins.Shape3D.Exps.ZElevation,
		C3.Behaviors.Flash.Acts.Flash,
		C3.Plugins.Shape3D.Acts.AddInstanceVar,
		C3.Behaviors.Timer.Acts.StopTimer,
		C3.Plugins.Shape3D.Cnds.CompareInstanceVar,
		C3.Plugins.Shape3D.Acts.SubInstanceVar,
		C3.Plugins.Sprite.Cnds.CompareAnimSpeed,
		C3.Plugins.Sprite.Acts.SetBoolInstanceVar,
		C3.Behaviors.skymenTrail.Acts.SetWidthStart,
		C3.Behaviors.skymenTrail.Acts.Attach,
		C3.Behaviors.skymenTrail.Acts.Reset,
		C3.Behaviors.Sin.Acts.SetEnabled,
		C3.Plugins.Sprite.Cnds.IsBoolInstanceVarSet,
		C3.Behaviors.Tween.Acts.StopTweens,
		C3.Behaviors.Tween.Acts.TweenValue,
		C3.Plugins.Text.Exps.Text,
		C3.Behaviors.Tween.Cnds.IsPlaying,
		C3.Behaviors.Tween.Exps.Value,
		C3.Plugins.System.Exps.canvastolayerx,
		C3.Plugins.System.Exps.layertocanvasx,
		C3.Plugins.System.Exps.layertocanvasy,
		C3.Plugins.System.Exps.canvastolayery,
		C3.Plugins.System.Exps.dt,
		C3.Plugins.Sprite.Cnds.IsOnLayer,
		C3.Plugins.Sprite.Acts.MoveToLayer,
		C3.Plugins.System.Acts.SortZOrderByInstVar,
		C3.Plugins.Browser.Cnds.OnUpdateFound,
		C3.Plugins.Browser.Cnds.OnOfflineReady,
		C3.Plugins.Browser.Acts.Reload,
		C3.Plugins.PlatformInfo.Acts.RequestWakeLock,
		C3.Plugins.AJAX.Acts.RequestFile,
		C3.Plugins.AJAX.Cnds.OnComplete,
		C3.Plugins.AJAX.Exps.LastData,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.System.Cnds.For,
		C3.Plugins.Button.Exps.Text
	];
};
self.C3_JsPropNameTable = [
	{tX: 0},
	{tY: 0},
	{tZ: 0},
	{bonus: 0},
	{indexBola: 0},
	{posX: 0},
	{posY: 0},
	{posZ: 0},
	{physicReady: 0},
	{mass: 0},
	{OBJ_SmallBall3D: 0},
	{Keyboard: 0},
	{Browser: 0},
	{OBJ_Camera: 0},
	{"3DCamera": 0},
	{TXT_FPS: 0},
	{ID: 0},
	{TXT_Ball: 0},
	{Rapier3DPhysics: 0},
	{Timer: 0},
	{OBJ_table: 0},
	{BTN_BigBall: 0},
	{Fade: 0},
	{OBJ_BigBall3D: 0},
	{Rotate3D: 0},
	{OBJ_spinTable: 0},
	{BTN_SliderSpeedPendorong: 0},
	{TXT_Ball2: 0},
	{BTN_Save: 0},
	{firstAngle: 0},
	{targetAngle: 0},
	{currentAngle: 0},
	{move: 0},
	{speedMove: 0},
	{OBJ_spin: 0},
	{PhysicsDebugRender: 0},
	{OBJ_CollisionSmallBall: 0},
	{OBJ_CollisionBigBall: 0},
	{vY: 0},
	{firstY: 0},
	{targetY: 0},
	{firstMove: 0},
	{OBJ_pusher: 0},
	{OBJ_CollisionPapan: 0},
	{Ray_BigBall: 0},
	{firstAngleX: 0},
	{targetAngleX: 0},
	{currentAngleX: 0},
	{firstAngleY: 0},
	{targetAngleY: 0},
	{currentAngleY: 0},
	{firstAngleZ: 0},
	{targetAngleZ: 0},
	{currentAngleZ: 0},
	{speed: 0},
	{OBJ_activeObstacle: 0},
	{currentStake: 0},
	{ballSpawnLeft: 0},
	{indexState: 0},
	{Flash: 0},
	{OBJ_triggerXnum1: 0},
	{Ray_SmallBall: 0},
	{OBJ_triggerXnum2: 0},
	{OBJ_triggerXnum3: 0},
	{cameraY: 0},
	{TXT_CameraDebug: 0},
	{cameraZelevation: 0},
	{cameraLookZ: 0},
	{cameraLookY: 0},
	{OBJ_CollisionWall: 0},
	{OBJ_triggerXnum4: 0},
	{OBJ_triggerBigBall: 0},
	{TXT_xNum1: 0},
	{TXT_xNum2: 0},
	{TXT_xNum3: 0},
	{TXT_xNum4: 0},
	{Touch: 0},
	{TxtLoading: 0},
	{OBJ_Canon2D: 0},
	{Hirarki_TL: 0},
	{Hirarki_TR: 0},
	{OBJ_triggerTicket1: 0},
	{OBJ_triggerTicket2: 0},
	{TXT_Ticket1: 0},
	{TXT_Ticket2: 0},
	{TXT_PartyTime: 0},
	{Hirarki_BL: 0},
	{TXT_Version: 0},
	{Hirarki_BR: 0},
	{Tween: 0},
	{TXT_Ticket: 0},
	{OBJ_TrigerSpinBiru: 0},
	{Hirarki_Spin: 0},
	{AJAX: 0},
	{JSON: 0},
	{JSON_SAVE: 0},
	{UI_2DBoard: 0},
	{OBJ_TrigerSpinkuning: 0},
	{OBJ_TrigerSpinMerah: 0},
	{LocalStorage: 0},
	{BTN_Clear: 0},
	{selfY: 0},
	{lastX: 0},
	{lastY: 0},
	{OBJ_SmallBall2D: 0},
	{Mouse: 0},
	{OBJ_triggerZonk1: 0},
	{warna: 0},
	{OBJ_BigBall2D: 0},
	{OBJ_SensorUjungPusher: 0},
	{OBJ_triggerZonk2: 0},
	{OBJ_SmallBall2DDrop: 0},
	{UI_PartyTimeTicket: 0},
	{UI_PartyTimeXnum: 0},
	{hide: 0},
	{BTN_HideSetting: 0},
	{maxStake: 0},
	{indexStake: 0},
	{postWidth: 0},
	{postHeight: 0},
	{OBJ_StakeBigBallBlue: 0},
	{OBJ_StakeBigBallRed: 0},
	{OBJ_StakeBigBallYellow: 0},
	{PlatformInfo: 0},
	{TXT_StakeRed: 0},
	{TXT_StakeYellow: 0},
	{TXT_StakeBlue: 0},
	{OBJ_HirarkiBolaAwal: 0},
	{UI_UpLamp: 0},
	{UI_Pin: 0},
	{TXT_BallRemain: 0},
	{bulatanTengah: 0},
	{UI_PartyTime: 0},
	{UI_Jackpot: 0},
	{BTN_TopUpBall: 0},
	{LimitFPS: 0},
	{VFX_BigBallDrop: 0},
	{UI_Ticket: 0},
	{Value: 0},
	{jackpot: 0},
	{getJackpot: 0},
	{OBJ_Ticket: 0},
	{TXT_ObjectTicket: 0},
	{TXT_Static: 0},
	{UI_PartyTime2: 0},
	{VFX_SmallBallDrop: 0},
	{OBJ_SmallBall2Dtransisi: 0},
	{VFX_BiglBallDrop: 0},
	{UI_NeonBoard: 0},
	{TXT_Jackpot: 0},
	{UI_panahPTticket: 0},
	{UI_panahPTball: 0},
	{TXT_StakeYellowPT: 0},
	{TXT_StakeBluePT: 0},
	{UI_vfxStaticGateBall: 0},
	{UI_vfxStaticGateTicket: 0},
	{UI_panahPTballStatic: 0},
	{UI_panahPTticketStatic: 0},
	{OBJ_SmallBall2DObstacle: 0},
	{OBJ_SmallBall3DPreview: 0},
	{Sine: 0},
	{VFX_StaticGateBall: 0},
	{VFX_StaticGateTicket: 0},
	{Button: 0},
	{TrailRenderer: 0},
	{Trail: 0},
	{Trail2: 0},
	{Family_3DBall: 0},
	{Family_3DObjectAll: 0},
	{Family_TXTxNum: 0},
	{Family_Zorder: 0},
	{Family_2DBall: 0},
	{gravity: 0},
	{ticket: 0},
	{PT_xNum: 0},
	{PT_ticket: 0},
	{PartyTime: 0},
	{indexFPS: 0},
	{PartyTimeLeft: 0},
	{MaxSpawnSmallBall: 0},
	{MaxSpawnBigBall: 0},
	{SpawnBall: 0},
	{BallRemain: 0},
	{BallSpawnActive: 0},
	{count: 0},
	{str_path: 0},
	{DebugPhysic: 0},
	{Loaded: 0},
	{PosX: 0},
	{PosY: 0},
	{Color: 0},
	{forSmallBall: 0},
	{forBigBall: 0},
	{forJackpot: 0},
	{forStaticGate: 0},
	{forStaticGateTicket: 0},
	{Add: 0},
	{updateAvailable: 0},
	{vjackpot: 0}
];

self.InstanceType = {
	OBJ_SmallBall3D: class extends self.IWorldInstance {},
	Keyboard: class extends self.IInstance {},
	Browser: class extends self.IInstance {},
	OBJ_Camera: class extends self.ISpriteInstance {},
	_3DCamera: class extends self.IInstance {},
	TXT_FPS: class extends self.ITextInstance {},
	TXT_Ball: class extends self.ITextInstance {},
	OBJ_table: class extends self.IWorldInstance {},
	BTN_BigBall: class extends self.IButtonInstance {},
	OBJ_BigBall3D: class extends self.IWorldInstance {},
	OBJ_spinTable: class extends self.IWorldInstance {},
	BTN_SliderSpeedPendorong: class extends self.ISliderBarInstance {},
	TXT_Ball2: class extends self.ITextInstance {},
	BTN_Save: class extends self.IButtonInstance {},
	OBJ_spin: class extends self.IWorldInstance {},
	PhysicsDebugRender: class extends self.IWorldInstance {},
	OBJ_CollisionSmallBall: class extends self.IWorldInstance {},
	OBJ_CollisionBigBall: class extends self.IWorldInstance {},
	OBJ_pusher: class extends self.IWorldInstance {},
	OBJ_CollisionPapan: class extends self.IWorldInstance {},
	Ray_BigBall: class extends self.IJSONInstance {},
	OBJ_activeObstacle: class extends self.IWorldInstance {},
	OBJ_triggerXnum1: class extends self.I3DShapeInstance {},
	Ray_SmallBall: class extends self.IJSONInstance {},
	OBJ_triggerXnum2: class extends self.I3DShapeInstance {},
	OBJ_triggerXnum3: class extends self.I3DShapeInstance {},
	cameraY: class extends self.ISliderBarInstance {},
	TXT_CameraDebug: class extends self.ITextInstance {},
	cameraZelevation: class extends self.ISliderBarInstance {},
	cameraLookZ: class extends self.ISliderBarInstance {},
	cameraLookY: class extends self.ISliderBarInstance {},
	OBJ_CollisionWall: class extends self.IWorldInstance {},
	OBJ_triggerXnum4: class extends self.I3DShapeInstance {},
	OBJ_triggerBigBall: class extends self.I3DShapeInstance {},
	TXT_xNum1: class extends self.ITextInstance {},
	TXT_xNum2: class extends self.ITextInstance {},
	TXT_xNum3: class extends self.ITextInstance {},
	TXT_xNum4: class extends self.ITextInstance {},
	Touch: class extends self.IInstance {},
	TxtLoading: class extends self.ITextInstance {},
	OBJ_Canon2D: class extends self.ISpriteInstance {},
	Hirarki_TL: class extends self.ISpriteInstance {},
	Hirarki_TR: class extends self.ISpriteInstance {},
	OBJ_triggerTicket1: class extends self.I3DShapeInstance {},
	OBJ_triggerTicket2: class extends self.I3DShapeInstance {},
	TXT_Ticket1: class extends self.ITextInstance {},
	TXT_Ticket2: class extends self.ITextInstance {},
	TXT_PartyTime: class extends self.ITextInstance {},
	Hirarki_BL: class extends self.ISpriteInstance {},
	TXT_Version: class extends self.ITextInstance {},
	Hirarki_BR: class extends self.ISpriteInstance {},
	TXT_Ticket: class extends self.ITextInstance {},
	OBJ_TrigerSpinBiru: class extends self.ISpriteInstance {},
	Hirarki_Spin: class extends self.ISpriteInstance {},
	AJAX: class extends self.IInstance {},
	JSON: class extends self.IJSONInstance {},
	JSON_SAVE: class extends self.IJSONInstance {},
	UI_2DBoard: class extends self.ISpriteInstance {},
	OBJ_TrigerSpinkuning: class extends self.ISpriteInstance {},
	OBJ_TrigerSpinMerah: class extends self.ISpriteInstance {},
	LocalStorage: class extends self.IInstance {},
	BTN_Clear: class extends self.IButtonInstance {},
	OBJ_SmallBall2D: class extends self.ISpriteInstance {},
	Mouse: class extends self.IInstance {},
	OBJ_triggerZonk1: class extends self.I3DShapeInstance {},
	OBJ_BigBall2D: class extends self.ISpriteInstance {},
	OBJ_SensorUjungPusher: class extends self.ISpriteInstance {},
	OBJ_triggerZonk2: class extends self.I3DShapeInstance {},
	OBJ_SmallBall2DDrop: class extends self.ISpriteInstance {},
	UI_PartyTimeTicket: class extends self.ISpriteInstance {},
	UI_PartyTimeXnum: class extends self.ISpriteInstance {},
	BTN_HideSetting: class extends self.IButtonInstance {},
	OBJ_StakeBigBallBlue: class extends self.ISpriteInstance {},
	OBJ_StakeBigBallRed: class extends self.ISpriteInstance {},
	OBJ_StakeBigBallYellow: class extends self.ISpriteInstance {},
	PlatformInfo: class extends self.IInstance {},
	TXT_StakeRed: class extends self.ITextInstance {},
	TXT_StakeYellow: class extends self.ITextInstance {},
	TXT_StakeBlue: class extends self.ITextInstance {},
	OBJ_HirarkiBolaAwal: class extends self.ISpriteInstance {},
	UI_UpLamp: class extends self.ISpriteInstance {},
	UI_Pin: class extends self.ISpriteInstance {},
	TXT_BallRemain: class extends self.ITextInstance {},
	bulatanTengah: class extends self.ISpriteInstance {},
	UI_PartyTime: class extends self.ISpriteInstance {},
	UI_Jackpot: class extends self.ISpriteInstance {},
	BTN_TopUpBall: class extends self.IButtonInstance {},
	LimitFPS: class extends self.IInstance {},
	VFX_BigBallDrop: class extends self.IParticlesInstance {},
	UI_Ticket: class extends self.ISpriteInstance {},
	OBJ_Ticket: class extends self.ISpriteInstance {},
	TXT_ObjectTicket: class extends self.ITextInstance {},
	TXT_Static: class extends self.ITextInstance {},
	UI_PartyTime2: class extends self.ISpriteInstance {},
	VFX_SmallBallDrop: class extends self.ISpriteInstance {},
	OBJ_SmallBall2Dtransisi: class extends self.ISpriteInstance {},
	VFX_BiglBallDrop: class extends self.ISpriteInstance {},
	UI_NeonBoard: class extends self.ISpriteInstance {},
	TXT_Jackpot: class extends self.ITextInstance {},
	UI_panahPTticket: class extends self.ISpriteInstance {},
	UI_panahPTball: class extends self.ISpriteInstance {},
	TXT_StakeYellowPT: class extends self.ITextInstance {},
	TXT_StakeBluePT: class extends self.ITextInstance {},
	UI_vfxStaticGateBall: class extends self.ISpriteInstance {},
	UI_vfxStaticGateTicket: class extends self.ISpriteInstance {},
	UI_panahPTballStatic: class extends self.ISpriteInstance {},
	UI_panahPTticketStatic: class extends self.ISpriteInstance {},
	OBJ_SmallBall2DObstacle: class extends self.ISpriteInstance {},
	OBJ_SmallBall3DPreview: class extends self.IWorldInstance {},
	VFX_StaticGateBall: class extends self.ISpriteInstance {},
	VFX_StaticGateTicket: class extends self.ISpriteInstance {},
	Button: class extends self.IButtonInstance {},
	Trail: class extends self.ISpriteInstance {},
	Trail2: class extends self.ISpriteInstance {},
	Family_3DBall: class extends self.IWorldInstance {},
	Family_3DObjectAll: class extends self.IWorldInstance {},
	Family_TXTxNum: class extends self.ITextInstance {},
	Family_Zorder: class extends self.ISpriteInstance {},
	Family_2DBall: class extends self.ISpriteInstance {}
}